"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useGetCountries from "@/hooks/useGetCountries";
import useGetTotalCount from "@/hooks/all/useGetTotalCount";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CellTotalCount from "@/components/tables/cells/CellTotalCount";
import { Skeleton } from "@/components/ui/skeleton";

const EditPage = () => {
  const countries = useGetCountries();
  const totalCount = useGetTotalCount();
  return (
    <main className="h-[100dvh] p-4">
      <div className="p-4 bg-muted h-[calc(100dvh_-_32px)] flex flex-col rounded-md overflow-clip">
        <div className="mb-8">
          <Button asChild>
            <Link href="/">Wróć</Link>
          </Button>
        </div>
        <div className="flex justify-between my-4 gap-4 overflow-y-scroll">
          <Table>
            <TableHeader className="sticky top-0">
              <TableRow>
                <TableHead className="bg-gray-200 uppercase text-regular w-[10%] text-primary font-bold border-0 py-3">
                  Kraj
                </TableHead>
                <TableHead className="bg-gray-200 uppercase text-regular w-[15%] text-primary font-bold border-0 py-3">
                  Konto
                </TableHead>
                <TableHead className="bg-gray-200 uppercase text-regular text-primary font-bold border-0 py-3">
                  Docelowa ilość
                </TableHead>
              </TableRow>
            </TableHeader>
            {countries.isLoading
              ? ""
              : countries.data.map((country) => {
                  return (
                    <TableBody
                      className="border-b border-l border-r border-gray-300"
                      key={country.id}
                    >
                      <TableRow>
                        <TableCell
                          className="text-2xl uppercase font-bold border-r border-gray-300"
                          rowSpan={country.accounts.length + 1}
                        >
                          {country.name}
                        </TableCell>
                      </TableRow>
                      {country.accounts.map((account) => (
                        <TableRow
                          className="border-b border-b-foreground/5 hover:bg-gray-200"
                          key={account.id}
                        >
                          <TableCell className="py-0">{account.name}</TableCell>
                          <TableCell className="py-0">
                            {totalCount.isLoading ? (
                              <Skeleton className="h-[24px] my-2 w-full bg-foreground/5" />
                            ) : (
                              <CellTotalCount
                                className="border-0"
                                data={totalCount.data}
                                countryId={country.id}
                                accountId={account.id}
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  );
                })}
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default EditPage;
