"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllOrders = () => {
  const getAllOrders = async () => {
    return await axios
      .get("/api/orders/all")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["allorders"], getAllOrders);
  return { data, isLoading };
};

export default useGetAllOrders;
