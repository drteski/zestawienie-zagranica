import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";

export async function GET() {
  const orders = await prisma.orderCount.findMany({
    where: {
      createdAt: {
        lte: endOfMonth(endOfDay(new Date())),
        gte: startOfMonth(startOfDay(new Date())),
      },
    },
  });
  return NextResponse.json([...orders]);
}
