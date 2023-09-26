import { NextResponse } from "next/server";
import prisma from "@/db";
import { format } from "date-fns";

export async function GET() {
  const products = await prisma.productsCount.findMany();
  const dates = products
    .map((product) => {
      const month = format(product.createdAt, "M");
      const year = format(product.createdAt, "yyyy");
      return {
        month,
        year,
      };
    })
    .filter(
      (date, index, array) =>
        index ===
        array.findIndex(
          (idx) => date.month === idx.month && date.year === idx.year,
        ),
    );

  return NextResponse.json([...dates]);
}
