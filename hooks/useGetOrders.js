"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetOrders = (countryId, accountId, dateStart, dateEnd) => {
  const getOrders = async () => {
    return await axios
      .get(
        `/api/orders?countryId=${countryId}&accountId=${accountId}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
      )
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, error, isError, isLoading } = useQuery(
    ["orders", countryId, accountId, dateStart, dateEnd],
    getOrders,
  );
  return { data, error, isError, isLoading };
};

export default useGetOrders;
