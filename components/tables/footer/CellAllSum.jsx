"use client";

const CellAllSum = ({ data, countryId }) => {
  return (
    <>
      {data
        .filter((country) => country.countryId === countryId)
        .reduce((acc, curr) => acc + curr.count, 0)}
    </>
  );
};

export default CellAllSum;
