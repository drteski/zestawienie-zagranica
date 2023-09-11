"use client";

import { Table } from "@/components/ui/table";
import useGetCountries from "@/hooks/useGetCountries";
import { Skeleton } from "@/components/ui/skeleton";
import { TableContainerAll } from "@/components/tables/TableContainerAll";
import TableHeadContent from "@/components/tables/TableHeadContentAll";

const HomePage = () => {
  const countries = useGetCountries();

  return (
    <>
      <h1 className="p-4 text-2xl uppercase font-bold">Wszystkie kraje</h1>
      <div className="overflow-y-scroll pl-4 pr-3 h-[calc(100dvh_-_128px_-_96px)]">
        {countries.isLoading ? (
          <Skeleton className="my-4 h-[calc(100dvh_-_128px_-_96px_-_32px)] bg-foreground/5" />
        ) : countries.data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100dvh_-_32px_-_32px_-_64px_-_140px_-_32px_+_64px)]">
            <h1 className="text-foreground/50 uppercase text-2xl py-4 font-bold">
              Brak danych do wyświetlenia
            </h1>
            <p className="text-foreground/50">
              Dodaj w konfiguracji kraje i konta.
            </p>
          </div>
        ) : (
          <>
            <div className="relative overflow-clip">
              <div className="flex border border-primary/5 rounded-md overflow-clip mb-4">
                <Table>
                  <TableHeadContent />
                  {countries.data.map((country) => {
                    return (
                      <TableContainerAll
                        key={country.id}
                        countryId={country.id}
                        accounts={country.accounts}
                        countryName={country.name}
                      />
                    );
                  })}
                </Table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
