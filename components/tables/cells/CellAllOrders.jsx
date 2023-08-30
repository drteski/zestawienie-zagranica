"use client";

const CellAllOrders = ({ data, countryId, accountId }) => {
  return (
    <>
      {data
        .filter((country) => country.countryId === countryId)
        .filter((account) => account.accountId === accountId)
        .reduce((acc, curr) => acc + curr.count, 0)}
    </>
  );
};

export default CellAllOrders;
