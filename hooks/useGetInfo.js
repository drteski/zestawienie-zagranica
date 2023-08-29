"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetInfo = (countryId, accountId, dateStart, dateEnd) => {
  const getInfo = async () => {
    return await axios
      .get(
        `/api/info?countryId=${countryId}&accountId=${accountId}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
      )
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, error, isError, isLoading } = useQuery(
    ["info", countryId, accountId, dateStart, dateEnd],
    getInfo,
  );
  return { data, error, isError, isLoading };
};

export default useGetInfo;
