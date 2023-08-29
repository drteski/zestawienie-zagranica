import { TableCell, TableFooter, TableRow } from "@/components/ui/table";

const TableFootContent = () => {
  return (
    <TableFooter className="relative bg-muted border-t text-primary">
      <TableRow>
        <TableCell className="font-bold py-3">SUMA</TableCell>
        <TableCell className="text-center font-bold">1</TableCell>
        <TableCell className="text-center font-bold">2</TableCell>
        <TableCell className="text-center font-bold">3</TableCell>
        <TableCell className="text-center font-bold">4</TableCell>
        <TableCell className="text-center font-bold">5</TableCell>
        <TableCell className="text-center font-bold"></TableCell>
        <TableCell className="text-center font-bold"></TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default TableFootContent;
