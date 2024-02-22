"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";

const CellCorrects = ({ data, countryId, accountId }) => {
  const currentDate = useSelector((state) => state.dataDate.currentDate);
  const [check, setCheck] = useState(0);
  const [correct, setCorrect] = useState(data);

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateCorrects = async (e) => {
    if (e.target.value === "") e.target.value = 0;
    if (check === parseInt(e.target.value)) return;
    setCorrect(parseInt(e.target.value));
    return await axios
      .post("/api/correct", {
        countryId,
        accountId,
        count: e.target.value,
        date: currentDate,
      })
      .then((res) => res.data);
  };

  const handleCorrects = useMutation({
    mutationFn: updateCorrects,
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
      onBlur={handleCorrects.mutate}
      type="number"
      className="text-center px-1 pt-[3px] border border-gray-300 bg-muted w-[60px]"
      defaultValue={correct}
      onWheel={numberInputOnWheelPreventChange}
      pattern="/^\d+$/"
    />
  );
};

export default CellCorrects;
