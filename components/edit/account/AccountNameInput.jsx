"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AccountNameInput = ({ account }) => {
  const [value, setValue] = useState(account.name);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  const accountNameUpdate = async (e) => {
    setValue(e.target.value);
    return await axios
      .put(`/api/accounts/${account.id}`, {
        name: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleAccountNameUpdate = useMutation({
    mutationFn: accountNameUpdate,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["accounts"]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });

  return (
    <Input onChange={handleAccountNameUpdate.mutate} defaultValue={value} />
  );
};

export default AccountNameInput;
