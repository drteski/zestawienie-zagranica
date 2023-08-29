"use client";

import { CarbonTrashCan } from "@/components/layout/Icons";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const CountryDeleteButton = ({ countryId }) => {
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
    <Button
      onClick={handleDeleteCountry.mutate}
      size="icon"
      variant="destructive"
      className="px-3"
    >
      <CarbonTrashCan className="h-5 w-5" />
    </Button>
  );
};

export default CountryDeleteButton;
