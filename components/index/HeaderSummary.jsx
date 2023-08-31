"use client";

import { format, isToday, parseISO } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

const HeaderSummary = ({ orders, products, mails, calls }) => {
  return (
    <div className="grid grid-cols-6 items-center gap-2 px-4 my-4">
      <div className="flex flex-col">
        <p className="pb-1 text-sm">Data:</p>
        {orders.isLoading ? (
          <Skeleton className="h-9 w-full bg-primary/10" />
        ) : (
          <p className="bg-foreground rounded-md text-primary-foreground text-sm px-4 py-2">
            {format(new Date(), "dd-MM-y")}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <p className="pb-1 text-sm">Zamówienia:</p>
        {orders.isLoading ? (
          <Skeleton className="h-9 w-full bg-primary/10" />
        ) : (
          <p className="bg-foreground rounded-md text-primary-foreground text-sm px-4 py-2">
            {orders.data
              .map((order) =>
                isToday(parseISO(order.createdAt)) ? order.count : 0,
              )
              .reduce((acc, cur) => acc + cur, 0)}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <p className="pb-1 text-sm">Zamówienia narastająco:</p>
        {orders.isLoading ? (
          <Skeleton className="h-9 w-full bg-primary/10" />
        ) : (
          <p className="bg-foreground rounded-md text-primary-foreground text-sm px-4 py-2">
            {orders.data.reduce((acc, curr) => acc + curr.count, 0)}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <p className="pb-1 text-sm">Telefony:</p>
        {calls.isLoading ? (
          <Skeleton className="h-9 w-full bg-primary/10" />
        ) : (
          <p className="bg-foreground rounded-md text-primary-foreground text-sm px-4 py-2">
            {calls.data
              .map((order) =>
                isToday(parseISO(order.createdAt)) ? order.count : 0,
              )
              .reduce((acc, cur) => acc + cur, 0)}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <p className="pb-1 text-sm">Maile:</p>
        {mails.isLoading ? (
          <Skeleton className="h-9 w-full bg-primary/10" />
        ) : (
          <p className="bg-foreground rounded-md text-primary-foreground text-sm px-4 py-2">
            {mails.data
              .map((order) =>
                isToday(parseISO(order.createdAt)) ? order.count : 0,
              )
              .reduce((acc, cur) => acc + cur, 0)}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <p className="pb-1 text-sm">Aktywne produkty:</p>
        {products.isLoading ? (
          <Skeleton className="h-9 w-full bg-primary/10" />
        ) : (
          <p className="bg-foreground rounded-md text-primary-foreground text-sm px-4 py-2">
            {products.data
              .map((order) =>
                isToday(parseISO(order.createdAt)) ? order.count : 0,
              )
              .reduce((acc, cur) => acc + cur, 0)}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderSummary;
