import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableHeadContent = () => {
  return (
    <TableHeader className="sticky top-[0] after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0.5 after:bg-gray-200">
      <TableRow>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[1%] text-primary font-bold border-0 py-3"></TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[10%] leading-3  text-primary font-bold border-0 py-3">
          Konto
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Zamówienia
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Zamówienia nar.
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Zwroty
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Zwroty nar.
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Zwroty %.
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Korekty
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Korekty nar.
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Korekty %.
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Telefony
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Telefony nar.
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Maile
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Maile nar.
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Akt. produkty
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[6%] leading-3 text-center text-primary font-bold border-0 py-3">
          Docelowe produkty
        </TableHead>
        <TableHead className="bg-gray-200 uppercase text-[10px] w-[15%] leading-3 text-center text-primary font-bold border-0 py-3">
          Ocena
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TableHeadContent;
