"use client";

import { useEffect, useState } from "react";
import DateSelect from "@/components/index/DateSelect";
import { Skeleton } from "@/components/ui/skeleton";
import useGetDateRange from "@/hooks/useGetDateRange";

const ReportsPage = () => {
  const { data, isLoading } = useGetDateRange();
  const { option, setOption } = useState("");
  useEffect(() => {
    if (isLoading) return;
    return setOption(`${data[0].month}-${data[0].year}`);
  }, [data]);
  return (
    <div className="p-4">
      <div className="flex items-center">
        <h2 className="uppercase text-2xl font-medium mr-2">Raport z</h2>
        {isLoading ? (
          <Skeleton className="h-8 bg-foreground/5 w-[200px]" />
        ) : (
          <DateSelect
            data={data}
            onValueChange={setOption}
            defaultValue={option}
          />
        )}
      </div>
    </div>
  );
};

export default ReportsPage;
