"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllProducts = () => {
  const getAllProducts = async () => {
    return await axios
      .get("/api/products/")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery({
    queryKey: ["allproducts"],
    queryFn: getAllProducts,
  });
  return { data, isLoading };
};

export default useGetAllProducts;
