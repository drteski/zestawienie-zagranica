"use client";

import { TableCell, TableFooter, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import CellSum from "@/components/tables/footer/CellSum";
import CellAllSum from "@/components/tables/footer/CellAllSum";

const TableFootContent = ({ products, orders, mails, calls, countryId }) => {
  return (
    <TableFooter className="text-foreground bg-foreground/5 text-xs border-0">
      <TableRow className="border-0">
        <TableCell className="font-bold py-3">SUMA</TableCell>
        <TableCell className="text-center font-bold py-3">
          {orders.isLoading ? (
            <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
          ) : (
            <CellSum data={orders.data} countryId={countryId} />
          )}
        </TableCell>
        <TableCell className="text-center font-bold py-3">
          {orders.isLoading ? (
            <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
          ) : (
            <CellAllSum data={orders.data} countryId={countryId} />
          )}
        </TableCell>
        <TableCell className="text-center font-bold py-3">
          {mails.isLoading ? (
            <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
          ) : (
            <CellSum data={mails.data} countryId={countryId} />
          )}
        </TableCell>
        <TableCell className="text-center font-bold py-3">
          {calls.isLoading ? (
            <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
          ) : (
            <CellSum data={calls.data} countryId={countryId} />
          )}
        </TableCell>
        <TableCell className="text-center font-bold py-3">
          {products.isLoading ? (
            <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
          ) : (
            <CellSum data={products.data} countryId={countryId} />
          )}
        </TableCell>
        <TableCell className="text-center font-bold py-3"></TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default TableFootContent;
