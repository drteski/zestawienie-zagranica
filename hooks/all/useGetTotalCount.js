"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetTotalCount = () => {
  const getTotalCount = async () => {
    return await axios
      .get("/api/productCount")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["totalcount"], getTotalCount);
  return { data, isLoading };
};

export default useGetTotalCount;
