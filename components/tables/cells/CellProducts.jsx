"use client";

import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const CellProducts = ({ data, countryId, accountId }) => {
  const [check, setCheck] = useState(0);
  const [product, setProduct] = useState(() => {
    const filterData = data
      .filter((country) => country.countryId === countryId)
      .filter((account) => account.accountId === accountId);
    return filterData.length === 0
      ? 0
      : filterData[filterData.length - 1].count;
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateProducts = async (e) => {
    if (e.target.value === "") e.target.value = 0;
    if (check === parseInt(e.target.value)) return;
    setProduct(parseInt(e.target.value));
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
      if (res)
        toast({
          title: `${res.message}`,
        });
    },
  });

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur();
    e.stopPropagation();
  };

  return (
    <>
      <Input
        onFocus={(e) => setCheck(parseInt(e.target.value))}
        onBlur={handleProducts.mutate}
        type="number"
        className="text-center border-0 bg-transparent"
        defaultValue={product}
        onWheel={numberInputOnWheelPreventChange}
        pattern="/^\d+$/"
      />
    </>
  );
};

export default CellProducts;
