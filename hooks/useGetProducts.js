"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetProducts = (countryId, accountId, dateStart, dateEnd) => {
  const getProducts = async () => {
    return await axios
      .get(
        `/api/products?countryId=${countryId}&accountId=${accountId}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
      )
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, error, isError, isLoading } = useQuery(
    ["products", countryId, accountId, dateStart, dateEnd],
    getProducts,
  );
  return { data, error, isError, isLoading };
};

export default useGetProducts;
