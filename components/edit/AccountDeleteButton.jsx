"use client";

import { CarbonTrashCan } from "@/components/layout/Icons";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const AccountDeleteButton = ({ accountId }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteAccount = async (e) => {
    e.preventDefault();
    return await axios
      .delete(`/api/accounts/${accountId}`)
      .then((res) => res.data);
  };

  const handleDeleteAccount = useMutation({
    mutationFn: deleteAccount,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["accounts"]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });
  return (
    <Button
      onClick={handleDeleteAccount.mutate}
      size="icon"
      variant="destructive"
      className="px-3"
    >
      <CarbonTrashCan className="h-5 w-5" />
    </Button>
  );
};

export default AccountDeleteButton;
