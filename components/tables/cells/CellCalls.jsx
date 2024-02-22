"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";

const CellCalls = ({ data, countryId, accountId }) => {
  const currentDate = useSelector((state) => state.dataDate.currentDate);
  const [check, setCheck] = useState(0);
  const [cell, setCell] = useState(data);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateCalls = async (e) => {
    if (e.target.value === "") e.target.value = 0;
    if (check === parseInt(e.target.value)) return;
    setCell(parseInt(e.target.value));
    return await axios
      .post("/api/calls", {
        countryId,
        accountId,
        count: e.target.value,
        date: currentDate,
      })
      .then((res) => res.data);
  };

  const handleCalls = useMutation({
    mutationFn: updateCalls,
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
      onBlur={handleCalls.mutate}
      type="number"
      className="text-center px-1 pt-[3px] border border-gray-300 bg-muted w-[60px]"
      defaultValue={cell}
      onWheel={numberInputOnWheelPreventChange}
      pattern="/^\d+$/"
    />
  );
};

export default CellCalls;
