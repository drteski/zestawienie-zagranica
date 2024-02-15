"use client";

import { Skeleton } from "@/components/ui/skeleton";
import useGetCountry from "@/hooks/useGetCountry";
import { Table } from "@/components/ui/table";
import TableHeadContentAll from "@/components/tables/TableHeadContentAll";
import { TableContainerAll } from "@/components/tables/TableContainerAll";

const CountryPage = ({ params }) => {
  const id = parseInt(params.id[0]);
  const country = useGetCountry(id);

  return (
    <>
      {country.isLoading ? (
        <Skeleton className="mx-4 mt-4 w-52 h-8 bg-slate-900/10" />
      ) : (
        <h1 className="p-4 text-2xl text-right uppercase font-bold">
          {country.data.name}
        </h1>
      )}
      <div className="overflow-y-scroll pl-4 pr-3 h-[calc(100dvh_-_128px_-_96px)]">
        {country.isLoading ? (
          <Skeleton className="my-4 h-[calc(100dvh_-_128px_-_96px_-_32px)] bg-foreground/5" />
        ) : (
          <Table>
            <TableHeadContentAll />
            <TableContainerAll
              key={country.data.id}
              countryId={country.data.id}
              accounts={country.data.accounts}
              countryName={country.data.name}
            />
          </Table>
        )}
      </div>
    </>
  );
};

export default CountryPage;
