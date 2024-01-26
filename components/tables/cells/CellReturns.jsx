"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import useInitialState from "@/hooks/useInitialState";

const CellReturns = ({ data, countryId, accountId }) => {
  const [check, setCheck] = useState(0);
  const [returns, setReturn] = useInitialState(data, countryId, accountId);

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
      })
      .then((res) => res.data);
  };

  const handleReturns = useMutation({
    mutationFn: updateReturns,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["allreturns"]);
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
      className="text-center border-0 bg-transparent"
      defaultValue={returns}
      onWheel={numberInputOnWheelPreventChange}
      pattern="/^\d+$/"
    />
  );
};

export default CellReturns;
