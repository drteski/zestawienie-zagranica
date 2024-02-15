"use client";

import useInitialState from "@/hooks/useInitialState";

const CellTotalCount = ({ data, countryId, accountId }) => {
  const [totalcount, setTotalCount] = useInitialState(
    data,
    countryId,
    accountId,
  );

  return <>{totalcount}</>;
};

export default CellTotalCount;
