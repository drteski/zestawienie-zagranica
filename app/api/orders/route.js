import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, parseISO, startOfDay } from "date-fns";

export async function GET(request) {
  const query = request.nextUrl.searchParams;
  const countryId = query.get("countryId");
  const accountId = query.get("accountId");
  const dateEnd = query.get("dateEnd");
  const dateStart = query.get("dateStart");
  const orders = await prisma.orderCount.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      createdAt: {
        lte: endOfDay(parseISO(new Date(dateEnd).toISOString())),
        gte: startOfDay(parseISO(new Date(dateStart).toISOString())),
      },
    },
  });
  return NextResponse.json([...orders]);
}

export async function POST(request) {
  const { countryId, accountId, count } = await request.json();
  const existing = await prisma.orderCount.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      createdAt: {
        gte: startOfDay(new Date()),
        lte: endOfDay(new Date()),
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
    },
  });
  return NextResponse.json({ message: "Dodano", orders });
}
