"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CountryNameInput = ({ country }) => {
  const [value, setValue] = useState(country.name);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  const countryNameUpdate = async (e) => {
    setValue(e.target.value);

    return await axios
      .put("/api/countries", {
        id: country.id,
        name: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleCountryNameUpdate = useMutation({
    mutationFn: countryNameUpdate,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["countries"]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });

  return (
    <Input onChange={handleCountryNameUpdate.mutate} defaultValue={value} />
  );
};

export default CountryNameInput;
