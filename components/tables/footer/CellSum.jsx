"use client";

import { isToday, parseISO } from "date-fns";

const CellSum = ({ data, countryId }) => {
  return (
    <>
      {data
        .filter((country) => country.countryId === countryId)
        .map((date) => (isToday(parseISO(date.createdAt)) ? date.count : 0))
        .reduce((acc, curr) => acc + curr, 0)}
    </>
  );
};

export default CellSum;
