"use client";

import useGetOrders from "@/hooks/useGetOrders";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CellOrders from "@/components/tables/cells/CellOrders";
import CellMails from "@/components/tables/cells/CellMails";
import CellCalls from "@/components/tables/cells/CellCalls";
import CellProducts from "@/components/tables/cells/CellProducts";
import useGetCalls from "@/hooks/useGetCalls";
import useGetMails from "@/hooks/useGetMails";
import useGetProducts from "@/hooks/useGetProducts";
import CellAccount from "@/components/tables/cells/CellInfo";
import CellInfo from "@/components/tables/cells/CellInfo";
import useGetInfo from "@/hooks/useGetInfo";

const CellContent = ({
  account,
  countryId,
  accountId,
  dateStart,
  dateEnd,
  type,
}) => {
  const orders = useGetOrders(countryId, accountId, dateStart, dateEnd);
  const calls = useGetCalls(countryId, accountId, dateStart, dateEnd);
  const mails = useGetMails(countryId, accountId, dateStart, dateEnd);
  const products = useGetProducts(countryId, accountId, dateStart, dateEnd);
  const info = useGetInfo(countryId, accountId, dateStart, dateEnd);
  const [allOrders, setAllOrders] = useState(0);
  useEffect(() => {
    if (orders.isLoading) return;
    const allOrders = orders.data.reduce((acc, curr) => acc + curr.count, 0);
    setAllOrders(allOrders);
  }, [orders]);

  if (type === "account") {
    return (
      <>
        {orders.isLoading ? (
          <Skeleton className="m-1 w-full h-full" />
        ) : (
          <CellAccount
            dateStart={dateStart}
            data={account}
            accountId={accountId}
            countryId={countryId}
            dateEnd={dateEnd}
          />
        )}
      </>
    );
  }
  if (type === "orders") {
    return (
      <>
        {orders.isLoading ? (
          <Skeleton className="m-1 w-full h-full" />
        ) : (
          <CellOrders
            dateStart={dateStart}
            data={orders.data}
            accountId={accountId}
            countryId={countryId}
            dateEnd={dateEnd}
          />
        )}
      </>
    );
  }
  if (type === "allorders") {
    return <>{allOrders}</>;
  }
  if (type === "mails") {
    return (
      <>
        {mails.isLoading ? (
          <Skeleton className="m-1 w-full h-full" />
        ) : (
          <CellMails
            dateStart={dateStart}
            data={mails.data}
            accountId={accountId}
            countryId={countryId}
            dateEnd={dateEnd}
          />
        )}
      </>
    );
  }
  if (type === "calls") {
    return (
      <>
        {calls.isLoading ? (
          <Skeleton className="m-1 w-full h-full" />
        ) : (
          <CellCalls
            dateStart={dateStart}
            data={calls.data}
            accountId={accountId}
            countryId={countryId}
            dateEnd={dateEnd}
          />
        )}
      </>
    );
  }
  if (type === "products") {
    return (
      <>
        {products.isLoading ? (
          <Skeleton className="m-1 w-full h-full" />
        ) : (
          <CellProducts
            dateStart={dateStart}
            data={products.data}
            accountId={accountId}
            countryId={countryId}
            dateEnd={dateEnd}
          />
        )}
      </>
    );
  }
  if (type === "info") {
    return (
      <>
        {info.isLoading ? (
          <Skeleton className="m-1 w-full h-full" />
        ) : (
          <CellInfo
            dateStart={dateStart}
            data={info.data}
            accountId={accountId}
            countryId={countryId}
            dateEnd={dateEnd}
          />
        )}
      </>
    );
  }
};

export default CellContent;
