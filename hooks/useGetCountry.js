"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetCountry = (id) => {
  const getCountry = async () => {
    return await axios
      .get(`/api/countries/${id}`)
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["country", id], getCountry);
  return { data, isLoading };
};

export default useGetCountry;
