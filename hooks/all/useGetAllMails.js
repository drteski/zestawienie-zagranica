"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllMails = () => {
  const getAllMails = async () => {
    return await axios
      .get("/api/mails/all")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(["allmails"], getAllMails);
  return { data, isLoading };
};

export default useGetAllMails;
