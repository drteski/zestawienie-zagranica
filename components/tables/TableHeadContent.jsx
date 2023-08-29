import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableHeadContent = () => {
  return (
    <TableHeader className="text-foreground bg-foreground/5 uppercase text-xs">
      <TableRow className="">
        <TableHead className="w-[calc(100%_/_9)] text-primary font-bold border-0 py-3">
          Konto
        </TableHead>
        <TableHead className="w-[calc(100%_/_8)] text-center text-primary font-bold border-0 py-3">
          Ilość zamówień
        </TableHead>
        <TableHead className="w-[calc(100%_/_5)] text-center text-primary font-bold border-0 py-3">
          Ilość zamówień narastająco
        </TableHead>
        <TableHead className="w-[calc(100%_/_9)] text-center text-primary font-bold border-0 py-3">
          Telefony
        </TableHead>
        <TableHead className="w-[calc(100%_/_9)] text-center text-primary font-bold border-0 py-3">
          Maile
        </TableHead>
        <TableHead className="w-[calc(100%_/_5)] text-center text-primary font-bold border-0 py-3">
          Ilość wystawionych produktów
        </TableHead>
        <TableHead className="w-[calc(100%_/_4)] text-center text-primary font-bold border-0 py-3">
          Ocena ManoMano
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeadContent;
