import { TableCell, TableFooter, TableRow } from "@/components/ui/table";

const TableFootContent = () => {
  return (
    <TableFooter className="text-foreground bg-foreground/5 text-xs border-0">
      <TableRow className="border-0">
        <TableCell className="font-bold py-3">SUMA</TableCell>
        <TableCell className="text-center font-bold py-3">1</TableCell>
        <TableCell className="text-center font-bold py-3">2</TableCell>
        <TableCell className="text-center font-bold py-3">3</TableCell>
        <TableCell className="text-center font-bold py-3">4</TableCell>
        <TableCell className="text-center font-bold py-3">5</TableCell>
        <TableCell className="text-center font-bold py-3"></TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default TableFootContent;
