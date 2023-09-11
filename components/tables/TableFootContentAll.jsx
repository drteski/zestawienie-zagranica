"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import CellSum from "@/components/tables/footer/CellSum";
import CellAllSum from "@/components/tables/footer/CellAllSum";
import CellSumProducts from "@/components/tables/footer/CellSumProducts";

const TableFootContent = ({ products, orders, mails, calls, countryId }) => {
  return (
    <TableRow className="text-primary-foreground bg-primary text-xs border-0">
      <TableCell className="font-medium text-base py-2"></TableCell>
      <TableCell className="font-medium text-base py-2">SUMA</TableCell>
      <TableCell className="text-center font-medium text-base py-2">
        {orders.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSum data={orders.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-base py-2">
        {orders.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllSum data={orders.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-base py-2">
        {calls.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSum data={calls.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-base py-2">
        {calls.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllSum data={calls.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-base py-2">
        {mails.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSum data={mails.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-base py-2">
        {mails.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllSum data={mails.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-base py-2">
        {products.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSumProducts data={products.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-base py-2"></TableCell>
    </TableRow>
  );
};

export default TableFootContent;
