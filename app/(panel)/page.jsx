"use client";

import { Table } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import TableDataHeader from "@/components/tables/TableDataHeader";
import { DatePicker } from "@/components/DatePicker";
import { TableData } from "@/components/tables/TableData";
import useGetAllData from "@/hooks/useGetAllData";
import { useSelector } from "react-redux";
import { CountrySelect } from "@/components/CountrySelect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TableDataSummary from "@/components/tables/TableDataSummary";

const HomePage = () => {
  const currentDate = useSelector((state) => state.dataDate.currentDate);
  const currentCountry = useSelector(
    (state) => state.countrySelect.currentCountry,
  );
  const countries = useGetAllData(currentDate);
  return (
    <>
      <div className="flex items-center justify-between h-24 w-full">
        <h1 className="p-4 text-2xl text-right uppercase font-bold">
          Zestawienie zagranica
        </h1>
        <div className="p-4 flex gap-6 items-end">
          <div className="flex flex-col">
            <span className="text-xs pb-2">Kraj:</span>
            {countries.isLoading ? (
              <Skeleton className="w-[200px] h-[36px] bg-foreground/5" />
            ) : (
              <CountrySelect countries={countries.data} />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xs pb-2">Dane z dnia:</span>
            {countries.isLoading ? (
              <Skeleton className="w-[200px] h-[36px] bg-foreground/5" />
            ) : (
              <DatePicker />
            )}
          </div>
          <Button className="w-full jusify-self-end" asChild>
            <Link href={`/count`}>Docelowe</Link>
          </Button>
          <Button className="w-full jusify-self-end" asChild>
            <Link href={`/config`}>Konfiguracja</Link>
          </Button>
        </div>
      </div>
      <div className="overflow-scroll w-full pl-4 mb-1 pb-2 pr-3 fh-[calc(100dvh_-_var(--summary-height)_-_96px_-_32px)]">
        {countries.isLoading ? (
          <Skeleton className="h-[calc(100dvh_-_var(--summary-height)_-_96px_-_48px)] bg-foreground/5" />
        ) : countries.data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100dvh_-_var(--summary-height)_-_96px_-_48px)]">
            <h1 className="text-foreground/50 uppercase text-2xl py-4 font-bold">
              Brak danych do wyświetlenia
            </h1>
            <p className="text-foreground/50">
              Dodaj w konfiguracji kraje i konta.
            </p>
          </div>
        ) : (
          <div className="flex border border-primary/5 rounded-md overflow-clip mb-4 min-w-[1750px]">
            <Table className="min-w-[1750px]">
              <TableDataHeader />
              {countries.data
                .filter((country) => {
                  const currentCountryId = parseInt(currentCountry);
                  if (currentCountryId === 0) return true;
                  return country.id === currentCountryId;
                })
                .map((country) => {
                  return <TableData key={country.id} data={country} />;
                })}
            </Table>
          </div>
        )}
      </div>
      {countries.isLoading ? (
        <Skeleton className="w-full h-[var(--summary-height)] bg-foreground/5" />
      ) : (
        <TableDataSummary countries={countries} />
      )}
    </>
  );
};

export default HomePage;
