"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetTodaysOrder = (countryId, accountId) => {
  const getOrder = async () => {
    return await axios
      .get(`/api/orders/today?countryId=${countryId}&accountId=${accountId}`)
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(
    ["order", countryId, accountId],
    getOrder,
  );
  return { data, isLoading };
};

export default useGetTodaysOrder;
