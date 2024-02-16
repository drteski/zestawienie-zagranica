"use client";

import useInitialState from "@/hooks/useInitialState";

const CellDisplayTotalCount = ({ data, countryId, accountId }) => {
  const [totalcount, setTotalCount] = useInitialState(
    data,
    countryId,
    accountId,
  );

  return <>{totalcount}</>;
};

export default CellDisplayTotalCount;
