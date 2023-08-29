"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CarbonAdd } from "@/components/layout/Icons";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useRef } from "react";

const CountryNewInput = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const inputRef = useRef(null);

  const createCountry = async (e) => {
    e.preventDefault();
    const input = inputRef.current;
    if (input.value === "") {
      return { message: "Wprowadź nazwę kraju" };
    }
    const data = await axios
      .post("/api/countries", {
        name: input.value,
      })
      .then((res) => res.data);
    input.value = "";
    return data;
  };

  const handleCreateCountry = useMutation({
    mutationFn: createCountry,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["countries"]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });

  return (
    <form onSubmit={handleCreateCountry.mutate} className="flex gap-2 px-2">
      <Input
        ref={inputRef}
        placeholder="Dodaj konto"
        className="outline-none focus:outline-none"
      />
      <Button size="icon" type="submit" className="px-2">
        <CarbonAdd className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default CountryNewInput;
