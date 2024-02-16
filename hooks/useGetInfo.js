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

  const { data, isLoading } = useQuery({
    queryKey: ["info"],
    queryFn: getInfo,
  });
  return { data, isLoading };
};

export default useGetInfo;
