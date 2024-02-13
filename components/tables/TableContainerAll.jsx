"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
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
import TableFootContentAll from "@/components/tables/TableFootContentAll";
import useGetAllReturns from "@/hooks/all/useGetAllReturns";
import useGetAllCorrect from "@/hooks/all/useGetAllCorrect";
import CellReturns from "@/components/tables/cells/CellReturns";
import CellCorrects from "@/components/tables/cells/CellCorrect";
import CellPercent from "@/components/tables/cells/CellPercent";

export function TableContainerAll({ countryId, accounts, countryName }) {
  const orders = useGetAllOrders();
  const returns = useGetAllReturns();
  const correct = useGetAllCorrect();
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
    <>
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
          sortedAccounts.map((account, index) => {
            return (
              <TableRow
                className="peer/row border-b border-b-foreground/5 hover:bg-gray-200"
                key={account.name}
              >
                {index === 0 && (
                  <TableCell
                    rowSpan={sortedAccounts.length}
                    id="country"
                    className="py-0 px-1 text-center font-bold text-lg text-normal border-r text-vert"
                  >
                    {countryName}
                  </TableCell>
                )}
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
                <TableCell
                  id="returns"
                  className="p-0 px-1 text-center text-sm"
                >
                  {returns.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellReturns
                      data={returns.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell
                  id="allreturns"
                  className="p-0 px-1 text-center text-sm"
                >
                  {returns.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellAllOrders
                      data={returns.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell
                  id="allreturnsp"
                  className="p-0 px-1 text-center text-sm"
                >
                  {returns.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : orders.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellPercent
                      orders={orders.data}
                      data={returns.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell
                  id="correct"
                  className="p-0 px-1 text-center text-sm"
                >
                  {correct.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellCorrects
                      data={correct.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell
                  id="allcorrect"
                  className="p-0 px-1 text-center text-sm"
                >
                  {correct.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellAllOrders
                      data={correct.data}
                      countryId={countryId}
                      accountId={account.id}
                    />
                  )}
                </TableCell>
                <TableCell
                  id="allcorrectp"
                  className="p-0 px-1 text-center text-sm"
                >
                  {correct.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : orders.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellPercent
                      orders={orders.data}
                      data={correct.data}
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
                <TableCell
                  id="allcalls"
                  className="p-0 px-1 text-center text-sm"
                >
                  {calls.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellAllOrders
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
                  id="allmails"
                  className="p-0 px-1 text-center text-sm"
                >
                  {mails.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <CellAllOrders
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
                <TableCell
                  id="products"
                  className="p-0 px-1 text-center text-sm"
                >
                  {products.isLoading ? (
                    <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                  ) : (
                    <>20</>
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
        <TableFootContentAll
          orders={orders}
          mails={mails}
          calls={calls}
          returns={returns}
          correct={correct}
          products={products}
          countryId={countryId}
        />
      </TableBody>
    </>
  );
}
