"use client";

const CellAllPercent = ({ orders, data, countryId }) => {
  const dataCount = data
    .filter((country) => country.countryId === countryId)
    .reduce((acc, curr) => acc + curr.count, 0);
  const ordersCount = orders
    .filter((country) => country.countryId === countryId)
    .reduce((acc, curr) => acc + curr.count, 0);

  let percent = 0;
  if (dataCount !== 0 && ordersCount !== 0) {
    percent = (dataCount * 100) / ordersCount;
  }

  return <>{percent.toFixed(2)} %</>;
};

export default CellAllPercent;
