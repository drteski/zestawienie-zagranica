"use client";

import { CarbonTrashCan } from "@/components/layout/Icons";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
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

const CountryDeleteButton = ({ countryId, countryName }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteCountry = async (e) => {
    e.preventDefault();
    return await axios
      .delete(`/api/countries/${countryId}`)
      .then((res) => res.data);
  };

  const handleDeleteCountry = useMutation({
    mutationFn: deleteCountry,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["countries"]);
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
            Czy na pewno usunąć kraj
            <strong className="uppercase"> {countryName}</strong>?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Usunięcie jest nieodwracalne. Zostaną usunięte wszystkie dane
            związane z tym krajem.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Anuluj</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteCountry.mutate}>
            Usuń
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CountryDeleteButton;
