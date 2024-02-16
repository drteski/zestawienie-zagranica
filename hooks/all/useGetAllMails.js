"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetAllMails = () => {
  const getAllMails = async () => {
    return await axios
      .get("/api/mails")
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery({
    queryKey: ["allmails"],
    queryFn: getAllMails,
  });
  return { data, isLoading };
};

export default useGetAllMails;
