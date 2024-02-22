"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";

const CellReturns = ({ data, countryId, accountId }) => {
  const currentDate = useSelector((state) => state.dataDate.currentDate);
  const [check, setCheck] = useState(0);
  const [returns, setReturn] = useState(data);

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateReturns = async (e) => {
    if (e.target.value === "") e.target.value = 0;
    if (check === parseInt(e.target.value)) return;
    setReturn(parseInt(e.target.value));
    return await axios
      .post("/api/returns", {
        countryId,
        accountId,
        count: e.target.value,
        date: currentDate,
      })
      .then((res) => res.data);
  };

  const handleReturns = useMutation({
    mutationFn: updateReturns,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["alldata", currentDate]);
      if (res)
        toast({
          title: `${res.message}`,
        });
    },
  });

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur();
    e.stopPropagation();
  };

  return (
    <Input
      onFocus={(e) => setCheck(parseInt(e.target.value))}
      onBlur={handleReturns.mutate}
      type="number"
      className="text-center px-1 pt-[3px] border border-gray-300 bg-muted w-[60px]"
      defaultValue={returns}
      onWheel={numberInputOnWheelPreventChange}
      pattern="/^\d+$/"
    />
  );
};

export default CellReturns;
