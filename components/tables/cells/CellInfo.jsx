"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const CellInfo = ({ data, countryId, accountId }) => {
  const [check, setCheck] = useState("");
  const [info, setInfo] = useState(data);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateAccount = async (e) => {
    if (check === e.target.value) return;
    setInfo(e.target.value);
    return await axios
      .post("/api/info", {
        countryId,
        accountId,
        info: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleAccount = useMutation({
    mutationFn: updateAccount,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["alldata", currentDate]);
      if (res)
        toast({
          title: `${res.message}`,
        });
    },
  });
  return (
    <Input
      onFocus={(e) => setCheck(e.target.value)}
      onBlur={handleAccount.mutate}
      className="text-center px-1 pt-[3px] border border-gray-300 bg-muted w-[84px]"
      defaultValue={info}
    />
  );
};

export default CellInfo;
