"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllReturns = () => {
  const getAllReturns = async () => {
    return await axios
      .get("/api/returns")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["allreturns"], getAllReturns);
  return { data, isLoading };
};

export default useGetAllReturns;
