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
        className="grid grid-cols-[200px_1fr] h-full gap-4"
      >
        <TabsList className="h-full justify-between">
          <div className="flex flex-col gap-1 items-start overflow-hidden">
            <CountriesList />
          </div>
          <Button asChild>
            <Link href="edit">Konfiguracja</Link>
          </Button>
        </TabsList>
        <div className="h-full w-full bg-muted rounded-md overflow-y-scroll">
          <div className="flex items-center px-4 my-4 justify-end">
            <p>{format(new Date(), "dd-MM-y")}</p>
          </div>
          {countries.isLoading ? (
            <Skeleton className="m-4 h-2/3 bg-primary-foreground" />
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
      </Tabs>
    </main>
  );
};

export default HomePage;
