"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetDateRange = () => {
  const getDateRange = async () => {
    return await axios
      .get("/api/dates")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["dates"], getDateRange);
  return { data, isLoading };
};

export default useGetDateRange;
