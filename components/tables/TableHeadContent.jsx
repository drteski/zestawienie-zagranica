import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableHeadContent = () => {
  return (
    <TableHeader className="text-foreground bg-foreground/5 uppercase text-xs">
      <TableRow className="">
        <TableHead className="w-[15%] text-primary font-bold border-0 py-3">
          Konto
        </TableHead>
        <TableHead className="w-[10%] text-center text-primary font-bold border-0 py-3">
          Ilość zamówień
        </TableHead>
        <TableHead className="w-[20%] text-center text-primary font-bold border-0 py-3">
          Ilość zamówień narastająco
        </TableHead>
        <TableHead className="w-[10%] text-center text-primary font-bold border-0 py-3">
          Telefony
        </TableHead>
        <TableHead className="w-[10%] text-center text-primary font-bold border-0 py-3">
          Maile
        </TableHead>
        <TableHead className="w-[15%] text-center text-primary font-bold border-0 py-3">
          Aktywne produktów
        </TableHead>
        <TableHead className="w-[20%] text-center text-primary font-bold border-0 py-3">
          Ocena
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeadContent;
