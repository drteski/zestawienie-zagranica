"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetCountries = () => {
  const getCountries = async () => {
    return await axios
      .get("/api/countries")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, error, isError, isLoading } = useQuery(
    ["countries"],
    getCountries,
  );
  return { data, error, isError, isLoading };
};

export default useGetCountries;
