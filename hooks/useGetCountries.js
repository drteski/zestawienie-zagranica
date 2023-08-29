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

  const { data, isLoading } = useQuery(["countries"], getCountries);
  return { data, isLoading };
};

export default useGetCountries;
