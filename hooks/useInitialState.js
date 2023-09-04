"use client";

import { isToday, parseISO } from "date-fns";
import { useState } from "react";

const useInitialState = (data, countryId, accountId) => {
  const [state, setState] = useState(() => {
    return data
      .filter((country) => country.countryId === countryId)
      .filter((account) => account.accountId === accountId)
      .map((date) => (isToday(parseISO(date.createdAt)) ? date.count : 0))
      .reduce((acc, curr) => acc + curr, 0);
  });
  return [state, setState];
};

export default useInitialState;
