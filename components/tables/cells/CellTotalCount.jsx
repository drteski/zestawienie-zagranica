"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const CellTotalCount = ({ data, countryId, accountId, currentDate }) => {
  const [check, setCheck] = useState(0);
  const [totalcount, setTotalCount] = useState(data);

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateTotalCounts = async (e) => {
    if (e.target.value === "") e.target.value = 0;
    if (check === parseInt(e.target.value)) return;
    setTotalCount(parseInt(e.target.value));
    return await axios
      .post("/api/totalcount", {
        countryId,
        accountId,
        count: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleTotalCounts = useMutation({
    mutationFn: updateTotalCounts,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["alldata", currentDate]);
      if (res) console.log(res);
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
      onBlur={handleTotalCounts.mutate}
      type="number"
      className="text-left px-1 border border-gray-300 bg-muted w-[200px]"
      defaultValue={totalcount}
      onWheel={numberInputOnWheelPreventChange}
      pattern="/^\d+$/"
    />
  );
};

export default CellTotalCount;
