"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import CellSum from "@/components/tables/footer/CellSum";
import CellAllSum from "@/components/tables/footer/CellAllSum";
import CellSumProducts from "@/components/tables/footer/CellSumProducts";
import CellAllPercent from "@/components/tables/footer/CellAllPercent";

const TableFootContent = ({
  products,
  orders,
  mails,
  correct,
  returns,
  calls,
  countryId,
}) => {
  return (
    <TableRow className="text-primary-foreground bg-primary text-xs border-0">
      <TableCell className="font-medium text-[14px] py-2"></TableCell>
      <TableCell className="font-medium text-[14px] py-2">SUMA</TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {orders.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSum data={orders.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {orders.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllSum data={orders.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {returns.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSum data={returns.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {returns.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllSum data={returns.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {returns.isLoading && orders.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllPercent
            orders={orders.data}
            data={returns.data}
            countryId={countryId}
          />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {correct.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSum data={correct.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {correct.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllSum data={correct.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {correct.isLoading && orders.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllPercent
            orders={orders.data}
            data={correct.data}
            countryId={countryId}
          />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {calls.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSum data={calls.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {calls.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllSum data={calls.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {mails.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSum data={mails.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {mails.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellAllSum data={mails.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {products.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <CellSumProducts data={products.data} countryId={countryId} />
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {products.isLoading ? (
          <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
        ) : (
          <></>
        )}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2"></TableCell>
    </TableRow>
  );
};

export default TableFootContent;
