import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, parseISO, startOfDay } from "date-fns";

export async function GET(request) {
  const query = request.nextUrl.searchParams;
  const countryId = query.get("countryId");
  const accountId = query.get("accountId");
  const orders = await prisma.orderCount.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      createdAt: {
        lte: endOfDay(parseISO(new Date().toISOString())),
        gte: startOfDay(parseISO(new Date().toISOString())),
      },
    },
  });

  return NextResponse.json([...orders]);
}
