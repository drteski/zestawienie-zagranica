"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { TabsTrigger } from "@/components/ui/tabs";
import useGetCountries from "@/hooks/useGetCountries";
import {
  CarbonChevronRight,
  CarbonCollapseAll,
} from "@/components/layout/Icons";

const NavCountries = () => {
  const countries = useGetCountries();

  return (
    <>
      {countries.isLoading ? (
        Array.from(Array(10).keys()).map((item) => {
          return <Skeleton key={item} className="h-8 w-full bg-foreground/5" />;
        })
      ) : (
        <div className="flex flex-col gap-1 items-start w-full h-[calc(100dvh_-_32px_-_64px)]">
          <TabsTrigger
            value="wszystkie"
            className="bg-primary text-primary-foreground"
          >
            Wszystkie <CarbonCollapseAll />
          </TabsTrigger>
          <div className="flex flex-col gap-1 items-start w-full overflow-y-scroll">
            {countries.data.map((country) => (
              <TabsTrigger key={country.name} value={country.name}>
                {country.name}
                <CarbonChevronRight />
              </TabsTrigger>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavCountries;
