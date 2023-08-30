"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const CellInfo = ({ data, countryId, accountId }) => {
  const [info, setInfo] = useState(() => {
    const filteredInfo = data
      .filter((country) => country.countryId === countryId)
      .filter((account) => account.accountId === accountId);

    return filteredInfo.length > 0 ? filteredInfo[0].info : "";
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const updateAccount = async (e) => {
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
      queryClient.invalidateQueries(["info"]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });
  return (
    <Input
      onChange={handleAccount.mutate}
      className="text-center px-4 border-0 bg-transparent"
      defaultValue={info}
    />
  );
};

export default CellInfo;
