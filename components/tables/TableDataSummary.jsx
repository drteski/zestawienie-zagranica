"use client";

import { format } from "date-fns";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useDimentions from "@/hooks/useDimentions";

const TableDataSummary = ({ countries }) => {
  const currentDate = useSelector((state) => state.dataDate.currentDate);
  const totalData = countries.data
    .map((sum) => sum.summary)
    .reduce(
      (acc, curr) => {
        acc.allCalls += curr.allCalls;
        acc.allCorrect += curr.allCorrect;
        acc.allMails += curr.allMails;
        acc.allOrders += curr.allOrders;
        acc.allReturns += curr.allReturns;
        acc.calls += curr.calls;
        acc.correct += curr.correct;
        acc.mails += curr.mails;
        acc.orders += curr.orders;
        acc.products += curr.products;
        acc.returns += curr.returns;
        return acc;
      },
      {
        allCalls: 0,
        allCorrect: 0,
        allMails: 0,
        allOrders: 0,
        allReturns: 0,
        calls: 0,
        correct: 0,
        mails: 0,
        orders: 0,
        products: 0,
        returns: 0,
      },
    );
  const ref = useRef(null);
  const summaryHeight = useDimentions(ref, () => {
    document.documentElement.style.setProperty(
      "--summary-height",
      `${summaryHeight.ref.height + 80}px`,
    );
  });

  const percentData = (data, total) => {
    let percent = 0;

    if (data !== 0 && total !== 0) {
      percent = (data * 100) / total;
    }
    return parseFloat(percent.toFixed(2));
  };

  return (
    <div className="flex flex-col p-4 bg-primary text-primary-foreground">
      <p className="mb-4 text-2xl uppercase font-bold">
        Podsumowanie wszystkich krajów
      </p>
      <div
        ref={ref}
        className="header-summary grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] h-min items-center gap-2"
      >
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Data:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {format(new Date(currentDate), "dd-MM-y")}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Zamówienia:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.orders}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Zamówienia nar:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.allOrders}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Zwroty:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.returns}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Zwroty nar:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.allCorrect}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Zwroty %:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {percentData(totalData.allReturns, totalData.allOrders)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Korekty:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.correct}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Korekty nar:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.allCorrect}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Korekty %:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {percentData(totalData.allCorrect, totalData.allOrders)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Telefony:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.calls}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Telefony nar:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.allCalls}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Maile:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.mails}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Maile nar:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.allMails}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-0.5 text-[9px]">Akt produkty:</p>
          <p className="rounded-md text-[15px] font-bold tracking-wider px-0 py-0">
            {totalData.products}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TableDataSummary;
