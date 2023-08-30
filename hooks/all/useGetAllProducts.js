"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllProducts = () => {
  const getAllProducts = async () => {
    return await axios
      .get("/api/products/all")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["allproducts"], getAllProducts);
  return { data, isLoading };
};

export default useGetAllProducts;
