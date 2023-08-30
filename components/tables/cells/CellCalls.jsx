"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { isToday, parseISO } from "date-fns";
import { Input } from "@/components/ui/input";

const CellCalls = ({ data, countryId, accountId }) => {
  const [cell, setCell] = useState(() => {
    return data
      .filter((country) => country.countryId === countryId)
      .filter((account) => account.accountId === accountId)
      .map((date) => (isToday(parseISO(date.createdAt)) ? date.count : 0))
      .reduce((acc, curr) => acc + curr, 0);
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const updateCalls = async (e) => {
    setCell(e.target.value);
    return await axios
      .post("/api/calls", {
        countryId,
        accountId,
        count: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleCalls = useMutation({
    mutationFn: updateCalls,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["allcalls"]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });
  return (
    <Input
      onChange={handleCalls.mutate}
      type="number"
      className="text-center border-0 bg-transparent"
      defaultValue={cell}
    />
  );
};

export default CellCalls;
