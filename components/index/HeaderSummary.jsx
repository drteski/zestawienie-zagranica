"use client";

import { format, isToday, parseISO } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import useGetAllOrders from "@/hooks/all/useGetAllOrders";
import useGetAllProducts from "@/hooks/all/useGetAllProducts";
import useGetAllMails from "@/hooks/all/useGetAllMails";
import useGetAllCalls from "@/hooks/all/useGetAllCalls";
import useGetAllReturns from "@/hooks/all/useGetAllReturns";
import useGetAllCorrect from "@/hooks/all/useGetAllCorrect";

const HeaderSummary = () => {
  const orders = useGetAllOrders();
  const products = useGetAllProducts();
  const returns = useGetAllReturns();
  const correct = useGetAllCorrect();
  const mails = useGetAllMails();
  const calls = useGetAllCalls();
  return (
    <div className="absolute  left-0 bottom-0 right-0 flex flex-col p-4 bg-primary text-primary-foreground">
      <p className="mb-4 text-2xl uppercase font-bold">
        Podsumowanie wszystkich krajów
      </p>
      <div className="grid grid-cols-[repeat(14,_minmax(0,_1fr))] items-center gap-2">
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Data:</p>
          {orders.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {format(new Date(), "dd-MM-y")}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Zamówienia:</p>
          {orders.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {orders.data
                .map((order) =>
                  isToday(parseISO(order.createdAt)) ? order.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Zamówienia nar:</p>
          {orders.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {orders.data.reduce((acc, curr) => acc + curr.count, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Zwroty:</p>
          {returns.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {returns.data
                .map((ret) =>
                  isToday(parseISO(ret.createdAt)) ? ret.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Zwroty nar:</p>
          {returns.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {returns.data.reduce((acc, curr) => acc + curr.count, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Zwroty %:</p>
          {returns.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : orders.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {returns.data.reduce((acc, curr) => acc + curr.count, 0)
                .length !== 0 &&
              orders.data.reduce((acc, curr) => acc + curr.count, 0).length !==
                0
                ? (
                    (returns.data.reduce((acc, curr) => acc + curr.count, 0) *
                      100) /
                    orders.data.reduce((acc, curr) => acc + curr.count, 0)
                  ).toFixed(2)
                : 0}{" "}
              %
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Korekty:</p>
          {correct.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {correct.data
                .map((corr) =>
                  isToday(parseISO(corr.createdAt)) ? corr.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Korekty nar:</p>
          {correct.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {correct.data.reduce((acc, curr) => acc + curr.count, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Korekty %:</p>
          {correct.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : orders.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {correct.data.reduce((acc, curr) => acc + curr.count, 0)
                .length !== 0 &&
              orders.data.reduce((acc, curr) => acc + curr.count, 0).length !==
                0
                ? (
                    (correct.data.reduce((acc, curr) => acc + curr.count, 0) *
                      100) /
                    orders.data.reduce((acc, curr) => acc + curr.count, 0)
                  ).toFixed(2)
                : 0}{" "}
              %
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Telefony:</p>
          {calls.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {calls.data
                .map((order) =>
                  isToday(parseISO(order.createdAt)) ? order.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Telefony nar:</p>
          {calls.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {calls.data.reduce((acc, curr) => acc + curr.count, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Maile:</p>
          {mails.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {mails.data
                .map((order) =>
                  isToday(parseISO(order.createdAt)) ? order.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Maile nar:</p>
          {mails.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {mails.data.reduce((acc, curr) => acc + curr.count, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-[10px]">Akt produkty:</p>
          {products.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-normal font-bold tracking-wider px-0 py-0">
              {products.data.reduce((acc, cur) => acc + cur.count, 0)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSummary;
