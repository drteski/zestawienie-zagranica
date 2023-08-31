"use client";

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import NavCountries from "@/components/index/NavCountries";
import CountryTableContainer from "@/components/tables/CountryTableContainer";
import { TableContainer } from "@/components/tables/Table";
import useGetCountries from "@/hooks/useGetCountries";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useGetAllOrders from "@/hooks/all/useGetAllOrders";
import useGetAllProducts from "@/hooks/all/useGetAllProducts";
import useGetAllMails from "@/hooks/all/useGetAllMails";
import useGetAllCalls from "@/hooks/all/useGetAllCalls";
import HeaderSummary from "@/components/index/HeaderSummary";

const HomePage = () => {
  const countries = useGetCountries();
  const orders = useGetAllOrders();
  const products = useGetAllProducts();
  const mails = useGetAllMails();
  const calls = useGetAllCalls();

  return (
    <main className="h-[100dvh] p-4">
      <Tabs
        defaultValue="wszystkie"
        className="grid grid-cols-[200px_1fr] h-[calc(100dvh_-_32px)] gap-4"
      >
        <TabsList className="w-full h-full overflow-hidden justify-between">
          <div className="flex flex-col gap-1 items-start h-[calc(100dvh_-_32px_-_64px)]">
            <NavCountries />
          </div>
          <Button asChild>
            <Link href="edit">Konfiguracja</Link>
          </Button>
        </TabsList>
        <div className="h-full w-full bg-muted rounded-md overflow-hidden">
          <HeaderSummary
            orders={orders}
            products={products}
            mails={mails}
            calls={calls}
          />
          <div className="overflow-y-scroll mt-4 pb-7 h-[calc(100dvh_-_32px_-_64px)]">
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
                        <TableContainer
                          country={country.name}
                          countryId={country.id}
                          accounts={country.accounts}
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
                        <TableContainer
                          country={country.name}
                          countryId={country.id}
                          accounts={country.accounts}
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
