"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import useGetCountries from "@/hooks/useGetCountries";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CarbonChevronRight,
  CarbonCollapseAll,
  CarbonReportData,
} from "@/components/layout/Icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const countries = useGetCountries();
  const path = usePathname();
  const currentCountry = parseInt(path.replace("/country/", ""));
  return (
    <div className="w-full grid grid-rows-[40px_1fr_40px] gap-1 bg-muted h-[calc(100dvh_-_32px)] rounded-md">
      <Button className="w-full items-start justify-start" asChild>
        <Link href="/" className="flex items-center justify-between">
          Wszystko <CarbonCollapseAll />
        </Link>
      </Button>
      <div className="flex flex-col gap-1 items-start w-full overflow-y-scroll">
        {countries.isLoading ? (
          Array.from(Array(24).keys()).map((item) => {
            return (
              <Skeleton
                key={item}
                className="h-[36px] w-full bg-slate-900/10"
              />
            );
          })
        ) : (
          <>
            {countries.data.map((country) => (
              <Button
                key={country.name}
                variant="ghost"
                className={`w-full items-start justify-start ${
                  country.id === currentCountry ? "bg-gray-300 " : ""
                }hover:bg-slate-500/10`}
                asChild
              >
                <Link
                  className="flex items-center justify-between"
                  href={`/country/${country.id}`}
                >
                  {country.name}
                  <CarbonChevronRight />
                </Link>
              </Button>
            ))}
          </>
        )}
      </div>
      <Button className="w-full jusify-self-end" asChild>
        <Link href={`/config`}>Konfiguracja</Link>
      </Button>
    </div>
  );
};

export default Navbar;
