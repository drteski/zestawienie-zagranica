"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TableDataRow } from "@/components/tables/TableDataRow";
import TableDataFooter from "@/components/tables/TableDataFooter";

export function TableData({ data }) {
  return (
    <TableBody>
      {data.accounts.length === 0 ? (
        <TableRow>
          <TableCell
            className="text-center h-[120px] text-xl text-foreground/50 uppercase"
            colSpan="7"
          >
            Brak dodanych kont
          </TableCell>
        </TableRow>
      ) : (
        <>
          <TableRow className="border-b border-b-foreground/5">
            <TableCell
              rowSpan={data.accounts.length + 1}
              id="country"
              className="py-0 px-1 text-center font-bold text-lg text-normal border-r text-vert"
            >
              {data.name}
            </TableCell>
          </TableRow>
          {data.accounts.map((account) => (
            <TableDataRow key={account.id} data={account} countryId={data.id} />
          ))}
          <TableDataFooter kye={data.id} country={data} />
        </>
      )}
    </TableBody>
  );
}
