"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAccounts = () => {
  const getAccounts = async () => {
    return await axios
      .get("/api/accounts")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["accounts"], getAccounts);
  return { data, isLoading };
};

export default useGetAccounts;
