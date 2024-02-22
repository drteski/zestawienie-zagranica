"use client";

import { format, startOfDay } from "date-fns";
import { pl } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDate } from "@/app/Redux/Features/date";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const currentDate = useSelector((state) => state.dataDate.currentDate);
  const dispatch = useDispatch();
  const toDateFormat = new Date(currentDate);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[200px] justify-start text-left font-normal",
            !toDateFormat && "text-muted-foreground",
          )}
          suppressHydrationWarning
        >
          {toDateFormat ? (
            <>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(toDateFormat, "dd-MM-yyyy")}
            </>
          ) : (
            <span>Wybierz dzień</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={toDateFormat}
          onSelect={(data) => {
            if (!data) return;
            dispatch(setCurrentDate(format(data, "yyyy-MM-dd")));
          }}
          numberOfMonths={2}
          locale={pl}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
