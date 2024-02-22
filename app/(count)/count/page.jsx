"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import useGetAllData from "@/hooks/useGetAllData";
import { useSelector } from "react-redux";
import { TableDataTargetRow } from "@/components/tables/TableDataRow";

const EditPage = () => {
  const currentDate = useSelector((state) => state.dataDate.currentDate);
  const countries = useGetAllData(currentDate);
  return (
    <main className="h-[100dvh] p-4">
      <div className="p-4 bg-muted h-[calc(100dvh_-_32px)] flex flex-col rounded-md overflow-clip">
        <div className="mb-8">
          <Button asChild>
            <Link href="/">Wróć</Link>
          </Button>
        </div>
        <div className="flex justify-between my-4 gap-4 overflow-y-scroll">
          {countries.isLoading ? (
            <Skeleton className="h-[calc(100dvh_-_var(--summary-height)_-_96px_-_48px)] bg-foreground/5" />
          ) : (
            <Table className="border-b border-b-foreground/5">
              <TableHeader className="sticky top-[0] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0.5 after:bg-gray-200">
                <TableRow>
                  <TableHead className="bg-gray-200 text-center uppercase text-[10px] leading-3 w-[10%] text-primary font-bold border-0 py-3">
                    Kraj
                  </TableHead>
                  <TableHead className="bg-gray-200 uppercase text-[10px] leading-3 w-[20%] text-primary font-bold border-0 py-3">
                    Konto
                  </TableHead>
                  <TableHead className="bg-gray-200 uppercase text-[10px] leading-3 w-[70%] px-[13px] text-primary font-bold border-0 py-3">
                    Docelowa ilość
                  </TableHead>
                </TableRow>
              </TableHeader>
              {countries.data.length === 0 ? (
                <TableRow>
                  <TableCell
                    className="text-center h-[120px] text-xl text-foreground/50 uppercase"
                    colSpan="7"
                  >
                    Brak dodanych kont
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {countries.data.map((country) => {
                    return (
                      <TableBody
                        key={country.id}
                        className="border-l border-r border-foreground/5"
                      >
                        {country.accounts.length === 0 ? (
                          <TableRow>
                            <TableCell
                              className="text-center h-[120px] text-xl text-foreground/50 uppercase"
                              colSpan="7"
                            >
                              Brak dodanych kont
                            </TableCell>
                          </TableRow>
                        ) : (
                          <>
                            <TableRow className="border-t border-t-foreground/5">
                              <TableCell
                                rowSpan={country.accounts.length + 1}
                                id="country"
                                className="py-0 px-1 text-center font-bold text-lg text-normal border-r"
                              >
                                {country.name}
                              </TableCell>
                            </TableRow>
                            {country.accounts.map((account) => (
                              <TableDataTargetRow
                                currentDate={currentDate}
                                key={account.id}
                                data={account}
                                countryId={country.id}
                              />
                            ))}
                          </>
                        )}
                      </TableBody>
                    );
                  })}
                </>
              )}
            </Table>
          )}
        </div>
      </div>
    </main>
  );
};

export default EditPage;
