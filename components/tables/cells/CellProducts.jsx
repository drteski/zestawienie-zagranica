"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { isToday, parseISO } from "date-fns";
import { Input } from "@/components/ui/input";

const CellProducts = ({ data, countryId, accountId }) => {
  const [product, setProduct] = useState(() => {
    return data
      .filter((country) => country.countryId === countryId)
      .filter((account) => account.accountId === accountId)
      .map((date) => (isToday(parseISO(date.createdAt)) ? date.count : 0))
      .reduce((acc, curr) => acc + curr, 0);
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const updateProducts = async (e) => {
    setProduct(e.target.value);
    return await axios
      .post("/api/products", {
        countryId,
        accountId,
        count: e.target.value,
      })
      .then((res) => res.data);
  };

  const handleProducts = useMutation({
    mutationFn: updateProducts,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["allproducts"]);
      router.refresh();
      toast({
        title: `${res.message}`,
      });
    },
  });
  return (
    <Input
      onChange={handleProducts.mutate}
      type="number"
      className="text-center border-0 bg-transparent"
      defaultValue={product}
    />
  );
};

export default CellProducts;
