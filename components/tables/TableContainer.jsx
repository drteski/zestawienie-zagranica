"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TableHeadContent from "@/components/tables/TableHeadContent";
import TableFootContent from "@/components/tables/TableFootContent";
import useGetAllOrders from "@/hooks/all/useGetAllOrders";
import useGetAllProducts from "@/hooks/all/useGetAllProducts";
import useGetAllMails from "@/hooks/all/useGetAllMails";
import useGetAllCalls from "@/hooks/all/useGetAllCalls";
import { Skeleton } from "@/components/ui/skeleton";
import CellOrders from "@/components/tables/cells/CellOrders";
import CellCalls from "@/components/tables/cells/CellCalls";
import CellMails from "@/components/tables/cells/CellMails";
import CellProducts from "@/components/tables/cells/CellProducts";
import CellInfo from "@/components/tables/cells/CellInfo";
import useGetInfo from "@/hooks/useGetInfo";
import CellAllOrders from "@/components/tables/cells/CellAllOrders";

export function TableContainer({ countryId, accounts }) {
  const orders = useGetAllOrders();
  const products = useGetAllProducts();
  const mails = useGetAllMails();
  const calls = useGetAllCalls();
  const info = useGetInfo();

  const sortedAccounts = accounts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <Table>
      <TableHeadContent />
      <TableBody>
        {accounts.length === 0 ? (
          <TableRow>
            <TableCell
              className="text-center h-[120px] text-xl text-foreground/50 uppercase"
              colSpan="7"
            >
              Brak dodanych kont
            </TableCell>
          </TableRow>
        ) : (
          sortedAccounts.map((account) => {
            return (
              <TableRow
                className="border-b border-b-foreground/5"
                key={account.name}
              >
                <TableCell id="account" className="py-0 font-medium text-sm">
                  {account.name}
                </TableCell>
                <TableCell id="orders" className="p-0 px-1 text-center text-sm">
                  {orders.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellOrders
                      data={orders.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell
                  id="allorders"
                  className="p-0 px-1 text-center text-sm"
                >
                  {orders.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellAllOrders
                      data={orders.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell id="calls" className="p-0 px-1 text-center text-sm">
                  {calls.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellCalls
                      data={calls.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell id="mails" className="p-0 px-1 text-center text-sm">
                  {mails.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellMails
                      data={mails.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell
                  id="products"
                  className="p-0 px-1 text-center text-sm"
                >
                  {products.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellProducts
                      data={products.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell id="info" className="p-0 px-1 text-center">
                  {info.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellInfo
                      data={info.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
      <TableFootContent
        orders={orders}
        mails={mails}
        calls={calls}
        products={products}
        countryId={countryId}
      />
    </Table>
  );
}
