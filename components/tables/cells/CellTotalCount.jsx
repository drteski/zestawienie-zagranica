"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { isToday, parseISO } from "date-fns";

const CellTotalCount = ({ data, countryId, accountId, className }) => {
  const [check, setCheck] = useState(0);
  const [totalcount, setTotalCount] = useState(() => {
    return data
      .filter((country) => country.countryId === countryId)
      .filter((account) => account.accountId === accountId)
      .map((date) => (isToday(parseISO(date.createdAt)) ? date.count : 0))
      .reduce((acc, curr) => acc + curr, 0);
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateTotalCounts = async (e) => {
    if (e.target.value === "") e.target.value = 0;
    if (check === parseInt(e.target.value)) return;
    setTotalCount(parseInt(e.target.value));
    return await axios
      .post("/api/productCount", {
        countryId,
        accountId,
        count: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleTotalCounts = useMutation({
    mutationFn: updateTotalCounts,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["totalcount"]);
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
      onBlur={handleTotalCounts.mutate}
      type="number"
      className={`text-center btotalcount-0 bg-transparent ${className} text-left`}
      defaultValue={totalcount}
      onWheel={numberInputOnWheelPreventChange}
      pattern="/^\d+$/"
    />
  );
};

export default CellTotalCount;