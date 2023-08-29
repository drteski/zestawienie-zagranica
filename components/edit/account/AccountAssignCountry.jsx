"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const AccountAssignCountry = ({ account, country }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const names = account.country.map((con) => con.name);

  const [checkedCountry, setCheckedCountry] = useState(
    names.includes(country.name),
  );

  const updateAccount = async (value) => {
    setCheckedCountry(value);
    return await axios
      .put("/api/accounts", {
        accountId: account.id,
        countryId: country.id,
        state: value,
      })
      .then((res) => res.data);
  };

  const handleUpdateAccount = useMutation({
    mutationFn: updateAccount,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["accounts"]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });

  return (
    <div className="flex items-center gap-1">
      <Checkbox
        data-accountid={account.id}
        data-countryid={country.id}
        id={`${account.name}-${country.name}`}
        onCheckedChange={handleUpdateAccount.mutate}
        checked={checkedCountry}
      />
      <label
        htmlFor={`${account.name}-${country.name}`}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {country.name}
      </label>
    </div>
  );
};

export default AccountAssignCountry;
