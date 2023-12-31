"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetInfo = () => {
  const getInfo = async () => {
    return await axios
      .get(`/api/info`)
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["info"], getInfo);
  return { data, isLoading };
};

export default useGetInfo;
