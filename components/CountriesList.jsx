"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { TabsTrigger } from "@/components/ui/tabs";
import useGetCountries from "@/hooks/useGetCountries";
import {
  CarbonChevronRight,
  CarbonCollapseAll,
} from "@/components/layout/Icons";

const CountriesList = () => {
  const countries = useGetCountries();

  return (
    <>
      {countries.isLoading ? (
        Array.from(Array(20).keys()).map((item) => {
          return <Skeleton key={item} className="h-8 w-full bg-foreground/5" />;
        })
      ) : (
        <>
          <TabsTrigger
            value="wszystkie"
            className="bg-primary text-primary-foreground"
          >
            Wszystkie <CarbonCollapseAll />
          </TabsTrigger>
          {countries.data.map((country) => (
            <TabsTrigger key={country.name} value={country.name}>
              {country.name}
              <CarbonChevronRight />
            </TabsTrigger>
          ))}
        </>
      )}
    </>
  );
};

export default CountriesList;
