import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableHeadContent = () => {
  return (
    <TableHeader>
      <TableRow className="uppercase">
        <TableHead className="w-[calc(100%_/_7)] text-primary">Konto</TableHead>
        <TableHead className="w-[calc(100%_/_7)] text-center text-primary">
          Ilość zamówień
        </TableHead>
        <TableHead className="w-[calc(100%_/_7)] text-center text-primary">
          Ilość zamówień narastająco
        </TableHead>
        <TableHead className="w-[calc(100%_/_7)] text-center text-primary">
          Telefony
        </TableHead>
        <TableHead className="w-[calc(100%_/_7)] text-center text-primary">
          Maile
        </TableHead>
        <TableHead className="w-[calc(100%_/_7)] text-center text-primary">
          Ilość wystawionych produktów
        </TableHead>
        <TableHead className="w-[calc(100%_/_7)] text-center text-primary">
          Ocena ManoMano
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeadContent;
