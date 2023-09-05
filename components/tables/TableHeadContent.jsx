import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableHeadContent = () => {
  return (
    <TableHeader className="sticky top-[0] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0.5 after:bg-gray-200">
      <TableRow>
        <TableHead className="bg-gray-200 uppercase text-xs w-[15%] text-primary font-bold border-0 py-3">
          Konto
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-xs w-[10%] text-center text-primary font-bold border-0 py-3">
          Zamówienia
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-xs w-[20%] text-center text-primary font-bold border-0 py-3">
          Zamówienia narastająco
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-xs w-[10%] text-center text-primary font-bold border-0 py-3">
          Telefony
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-xs w-[10%] text-center text-primary font-bold border-0 py-3">
          Maile
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-xs w-[15%] text-center text-primary font-bold border-0 py-3">
          Aktywne produktów
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-xs w-[20%] text-center text-primary font-bold border-0 py-3">
          Ocena
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeadContent;
