"use client";

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import CountriesList from "@/components/CountriesList";
import CountryTableContainer from "@/components/tables/CountryTableContainer";
import { TableDemo } from "@/components/tables/Table";
import useGetCountries from "@/hooks/useGetCountries";
import { Skeleton } from "@/components/ui/skeleton";
import { endOfMonth, format, startOfMonth } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  const countries = useGetCountries();

  const dateStart = startOfMonth(new Date());
  const dateEnd = endOfMonth(new Date());

  return (
    <main className="h-[100dvh] p-4">
      <Tabs
        defaultValue="wszystkie"
        className="grid grid-cols-[200px_1fr] h-[calc(100dvh_-_32px)] gap-4"
      >
        <TabsList className="h-full justify-between">
          <div className="flex flex-col gap-1 items-start overflow-hidden">
            <CountriesList />
          </div>
          <Button asChild>
            <Link href="edit">Konfiguracja</Link>
          </Button>
        </TabsList>
        <div className="h-full w-full bg-muted rounded-md overflow-hidden">
          <div className="flex items-center px-4 my-4 justify-end">
            <p className="bg-foreground rounded-md text-primary-foreground px-2 py-1">
              {format(new Date(), "dd-MM-y")}
            </p>
          </div>
          <div className="overflow-y-scroll h-[calc(100dvh_-_32px_-_64px)]">
            {countries.isLoading ? (
              <Skeleton className="m-4 h-[calc(100dvh_-_32px_-_64px_-_32px)] bg-foreground/5" />
            ) : countries.data.length === 0 ? (
              <TabsContent
                value="wszystkie"
                className="flex flex-col items-center justify-center h-[calc(100dvh_-_32px_-_64px_-_32px)]"
              >
                <h1 className="text-foreground/50 uppercase text-2xl py-4 font-bold">
                  Brak danych do wyświetlenia
                </h1>
                <p className="text-foreground/50">
                  Dodaj w konfiguracji kraje i konta.
                </p>
              </TabsContent>
            ) : (
              <>
                <TabsContent value="wszystkie">
                  {countries.data.map((country) => {
                    return (
                      <CountryTableContainer
                        key={country.name}
                        country={country.name}
                        countryId={country.id}
                      >
                        <TableDemo
                          country={country.name}
                          countryId={country.id}
                          accounts={country.accounts}
                          dateStart={format(dateStart, "y-MM-dd")}
                          dateEnd={format(dateEnd, "y-MM-dd")}
                        />
                      </CountryTableContainer>
                    );
                  })}
                </TabsContent>
                {countries.data.map((country) => {
                  return (
                    <TabsContent key={country.name} value={country.name}>
                      <CountryTableContainer
                        country={country.name}
                        countryId={country.id}
                      >
                        <TableDemo
                          country={country.name}
                          countryId={country.id}
                          accounts={country.accounts}
                          dateStart={format(dateStart, "y-MM-dd")}
                          dateEnd={format(dateEnd, "y-MM-dd")}
                        />
                      </CountryTableContainer>
                    </TabsContent>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </Tabs>
    </main>
  );
};

export default HomePage;
