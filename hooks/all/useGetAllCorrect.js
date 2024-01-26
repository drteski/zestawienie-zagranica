"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllCorrect = () => {
  const getAllCorrect = async () => {
    return await axios
      .get("/api/correct")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["allcorrect"], getAllCorrect);
  return { data, isLoading };
};

export default useGetAllCorrect;
