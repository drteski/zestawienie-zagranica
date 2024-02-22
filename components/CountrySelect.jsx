"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCountry } from "@/app/Redux/Features/country";

export function CountrySelect({ countries }) {
  const currentCountry = useSelector(
    (state) => state.countrySelect.currentCountry,
  );
  const dispatch = useDispatch();
  return (
    <Select
      onValueChange={(data) => dispatch(setCurrentCountry(data))}
      defaultValue={currentCountry}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Kraj" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">Wszystko</SelectItem>
        {countries.map((country) => {
          return (
            <SelectItem key={country.id} value={country.id.toString()}>
              {country.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
