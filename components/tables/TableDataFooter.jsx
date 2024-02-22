"use client";

import { TableCell, TableRow } from "@/components/ui/table";

const TableDataFooter = ({ country }) => {
  const {
    orders,
    allOrders,
    returns,
    returnsPercent,
    allReturns,
    correct,
    correctPercent,
    allCorrect,
    mails,
    allMails,
    calls,
    allCalls,
    products,
    targetProducts,
  } = country.summary;
  return (
    <TableRow className="text-primary-foreground bg-primary text-xs border-0">
      <TableCell className="font-medium text-[14px] py-2"></TableCell>
      <TableCell className="font-medium text-[14px] py-2">SUMA</TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {orders}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {allOrders}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {returns}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {allReturns}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {returnsPercent} %
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {correct}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {allCorrect}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {correctPercent} %
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {calls}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {allCalls}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {mails}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {allMails}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {products}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2">
        {targetProducts}
      </TableCell>
      <TableCell className="text-center font-medium text-[14px] py-2"></TableCell>
    </TableRow>
  );
};

export default TableDataFooter;
