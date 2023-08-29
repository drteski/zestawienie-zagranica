"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetMails = (countryId, accountId, dateStart, dateEnd) => {
  const getMails = async () => {
    return await axios
      .get(
        `/api/mails?countryId=${countryId}&accountId=${accountId}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
      )
      .then((res) => res.data)
      .catch((error) => ({
        message: error,
      }));
  };

  const { data, isLoading } = useQuery(
    ["mails", countryId, accountId, dateStart, dateEnd],
    getMails,
  );
  return { data, isLoading };
};

export default useGetMails;
