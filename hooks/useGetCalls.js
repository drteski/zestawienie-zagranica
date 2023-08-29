"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetCalls = (countryId, accountId, dateStart, dateEnd) => {
  const getCalls = async () => {
    return await axios
      .get(
        `/api/calls?countryId=${countryId}&accountId=${accountId}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
      )
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, error, isError, isLoading } = useQuery(
    ["calls", countryId, accountId, dateStart, dateEnd],
    getCalls,
  );
  return { data, error, isError, isLoading };
};

export default useGetCalls;
