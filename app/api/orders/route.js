import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";

export const dynamic = "force-dynamic";

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

export async function POST(request) {
  const { countryId, accountId, count, date } = await request.json();
  const existing = await prisma.orderCount.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      createdAt: {
        gte: startOfDay(new Date(date)),
        lte: endOfDay(new Date(date)),
      },
    },
  });
  if (existing.length !== 0) {
    const orders = await prisma.orderCount.update({
      where: {
        id: existing[0].id,
      },
      data: {
        count: parseInt(count),
        Country: {
          connect: {
            id: parseInt(countryId),
          },
        },
        Account: {
          connect: {
            id: parseInt(accountId),
          },
        },
      },
    });
    return NextResponse.json({ message: "Zaktualizowano", orders });
  }
  const orders = await prisma.orderCount.create({
    data: {
      count: parseInt(count),
      Country: {
        connect: {
          id: parseInt(countryId),
        },
      },
      Account: {
        connect: {
          id: parseInt(accountId),
        },
      },
      createdAt: new Date(date),
    },
  });
  return NextResponse.json({ message: "Dodano", orders });
}
