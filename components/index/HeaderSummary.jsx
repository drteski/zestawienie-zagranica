"use client";

import { format, isToday, parseISO } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import useGetAllOrders from "@/hooks/all/useGetAllOrders";
import useGetAllProducts from "@/hooks/all/useGetAllProducts";
import useGetAllMails from "@/hooks/all/useGetAllMails";
import useGetAllCalls from "@/hooks/all/useGetAllCalls";

const HeaderSummary = () => {
  const orders = useGetAllOrders();
  const products = useGetAllProducts();
  const mails = useGetAllMails();
  const calls = useGetAllCalls();
  return (
    <div className="absolute  left-0 bottom-0 right-0 flex flex-col p-4 bg-primary text-primary-foreground">
      <p className="mb-4 text-2xl uppercase font-bold">
        Podsumowanie wszystkich krajów
      </p>
      <div className="grid grid-cols-6 items-center gap-2">
        <div className="flex flex-col">
          <p className="pb-1 text-xs">Data:</p>
          {orders.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-xl font-black tracking-wider px-0 py-0">
              {format(new Date(), "dd-MM-y")}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-xs">Zamówienia:</p>
          {orders.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-xl font-black tracking-wider px-0 py-0">
              {orders.data
                .map((order) =>
                  isToday(parseISO(order.createdAt)) ? order.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-xs">Zamówienia narastająco:</p>
          {orders.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-xl font-black tracking-wider px-0 py-0">
              {orders.data.reduce((acc, curr) => acc + curr.count, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-xs">Telefony:</p>
          {calls.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-xl font-black tracking-wider px-0 py-0">
              {calls.data
                .map((order) =>
                  isToday(parseISO(order.createdAt)) ? order.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-xs">Maile:</p>
          {mails.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-xl font-black tracking-wider px-0 py-0">
              {mails.data
                .map((order) =>
                  isToday(parseISO(order.createdAt)) ? order.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="pb-1 text-xs">Aktywne produkty:</p>
          {products.isLoading ? (
            <Skeleton className="h-7 w-full bg-primary-foreground/10" />
          ) : (
            <p className="rounded-md text-xl font-black tracking-wider px-0 py-0">
              {products.data
                .map((order) =>
                  isToday(parseISO(order.createdAt)) ? order.count : 0,
                )
                .reduce((acc, cur) => acc + cur, 0)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSummary;
