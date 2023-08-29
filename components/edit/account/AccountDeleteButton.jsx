"use client";

import { CarbonTrashCan } from "@/components/layout/Icons";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AccountDeleteButton = ({ accountId, accountName }) => {
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive" className="px-3">
          <CarbonTrashCan className="h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Czy na pewno usunąć konto
            <strong className="uppercase"> {accountName}</strong>?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Usunięcie jest nieodwracalne. Zostaną usunięte wszystkie dane
            związane z tym kontem.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Anuluj</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAccount.mutate}>
            Usuń
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AccountDeleteButton;
