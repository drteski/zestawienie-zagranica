"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllData = (date) => {
  const getAllData = async () => {
    return await axios
      .get(`/api/all/${date}`)
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery({
    queryKey: ["alldata", date],
    queryFn: getAllData,
  });
  return { data, isLoading };
};

export default useGetAllData;
