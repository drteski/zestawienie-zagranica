"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllCalls = () => {
  const getAllCalls = async () => {
    return await axios
      .get("/api/calls/all")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["allcalls"], getAllCalls);
  return { data, isLoading };
};

export default useGetAllCalls;
