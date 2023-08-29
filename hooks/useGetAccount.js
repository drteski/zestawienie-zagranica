"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAccount = ({ id }) => {
  const getAccount = async () => {
    return await axios
      .get(`/api/accounts/${id}`)
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, error, isError, isLoading } = useQuery(
    ["account", id],
    getAccount,
  );
  return { data, error, isError, isLoading };
};

export default useGetAccount;
