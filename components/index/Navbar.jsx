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
import { useLayoutEffect, useRef, useState } from "react";

const Navbar = () => {
  const btnRef = useRef(null);
  const [open, setOpen] = useState(false);
  const countries = useGetCountries();
  const path = usePathname();
  const currentCountry = parseInt(path.replace("/country/", ""));
  const navbarWidth = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--column-width");

  const handleClick = (e) => {
    console.log(e.target, btnRef.current);
    if (e.currentTarget !== btnRef.current) setOpen(false);
    setOpen(!open);
  };

  document.documentElement.style.setProperty(
    "--column-width",
    `${open ? "200px" : "0"}`,
  );

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleClick}
        title="Menu"
        className="absolute top-7 left-8 z-10 rounded-lg bg-slate-800 p-2 text-xs text-white hover:bg-slate-700 transition"
      >
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586z"
            ></path>
          </svg>
        )}
      </button>
      <div
        className={`w-full grid grid-rows-[40px_1fr_40px] gap-1 pt-16 bg-muted h-[calc(100dvh_-_32px)] rounded-md transition`}
      >
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
    </>
  );
};

export default Navbar;
