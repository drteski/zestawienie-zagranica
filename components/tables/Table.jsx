"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TableHeadContent from "@/components/tables/TableHeadContent";
import TableFootContent from "@/components/tables/TableFootContent";
import CellContent from "@/components/tables/CellContent";

export function TableDemo({ countryId, dateStart, dateEnd, accounts }) {
  return (
    <Table>
      <TableHeadContent />
      <TableBody className="">
        {accounts.length === 0 ? (
          <TableRow>
            <TableCell
              className="text-center text-xl font-light py-6"
              colSpan="7"
            >
              Brak danych
            </TableCell>
          </TableRow>
        ) : (
          accounts.map((account) => {
            return (
              <TableRow key={account.name}>
                <TableCell id="account" className="py-0 font-medium text-sm">
                  {account.name}
                </TableCell>
                <TableCell id="orders" className="p-0 text-center text-sm">
                  <CellContent
                    countryId={countryId}
                    accountId={account.id}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    type="orders"
                  />
                </TableCell>
                <TableCell id="allorders" className="p-0 text-center text-sm">
                  <CellContent
                    countryId={countryId}
                    accountId={account.id}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    type="allorders"
                  />
                </TableCell>
                <TableCell id="calls" className="p-0 text-center text-sm">
                  <CellContent
                    countryId={countryId}
                    accountId={account.id}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    type="calls"
                  />
                </TableCell>
                <TableCell id="mails" className="p-0 text-center text-sm">
                  <CellContent
                    countryId={countryId}
                    accountId={account.id}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    type="mails"
                  />
                </TableCell>
                <TableCell id="products" className="p-0 text-center text-sm">
                  <CellContent
                    countryId={countryId}
                    accountId={account.id}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    type="products"
                  />
                </TableCell>
                <TableCell id="info" className="p-0 text-center">
                  <CellContent
                    countryId={countryId}
                    accountId={account.id}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    type="info"
                  />
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
      <TableFootContent />
    </Table>
  );
}
