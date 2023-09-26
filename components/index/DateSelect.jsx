import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

const DateSelect = (props) => {
  return (
    <Select {...props}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {props.data.map((option, index) => {
            const { month, year } = option;
            const formatedDate = `${format(
              new Date(parseInt(year), parseInt(month) - 1),
              "MMMM yyyy",
            )}`;
            return (
              <SelectItem key={index} value={`${month}-${year}`}>
                {formatedDate}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DateSelect;
