"use client";

import { Skeleton } from "@/components/ui/skeleton";
import CountryNameInput from "@/components/edit/country/CountryNameInput";
import CountryDeleteButton from "@/components/edit/country/CountryDeleteButton";
import CountryNewInput from "@/components/edit/country/CountryNewInput";
//dupa

const CountryEdit = ({ isLoading, data }) => {
  return (
    <div className="w-full h-[calc(100dvh_-_64px_-_88px)]">
      <h3 className="px-1 py-4 font-medium text-xl uppercase">Kraje</h3>
      <div className="flex flex-col gap-2 h-[calc(100dvh_-_64px_-_88px_-_100px)] p-2 overflow-y-scroll">
        {isLoading ? (
          <>
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
          </>
        ) : data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-foreground/50 uppercase text-2xl py-4 font-bold">
              Brak dodanych krajów
            </h2>
            <p className="text-foreground/50">Dodaj kraje poniżej</p>
          </div>
        ) : (
          data.map((country) => {
            return (
              <form key={country.id} className="flex gap-2">
                <CountryNameInput country={country} />
                <CountryDeleteButton
                  countryId={country.id}
                  countryName={country.name}
                />
              </form>
            );
          })
        )}
      </div>
      <CountryNewInput />
    </div>
  );
};

export default CountryEdit;
