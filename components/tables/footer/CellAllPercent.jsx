"use client";

import { useEffect, useState } from "react";

const CellAllPercent = ({ orders, data, countryId }) => {
  const [ordersData, setOrdersData] = useState([]);
  const [percentData, setpercentData] = useState([]);
  useEffect(() => {
    const dataCount = data
      .filter((country) => country.countryId === countryId)
      .reduce((acc, curr) => acc + curr.count, 0);
    const ordersCount = orders
      .filter((country) => country.countryId === countryId)
      .reduce((acc, curr) => acc + curr.count, 0);
    setOrdersData(ordersCount);
    setpercentData(dataCount);
  }, [orders, data, countryId]);

  let percent = 0;
  if (percentData !== 0 && ordersData !== 0) {
    percent = (percentData * 100) / ordersData;
  }

  return <>{percent.toFixed(2)}%</>;
};

export default CellAllPercent;
