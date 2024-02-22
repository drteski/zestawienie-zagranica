import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";

export async function GET() {
  const calls = await prisma.callCount.findMany({
    where: {
      createdAt: {
        lte: endOfMonth(endOfDay(new Date())),
        gte: startOfMonth(startOfDay(new Date())),
      },
    },
  });
  return NextResponse.json([...calls]);
}

export async function POST(request) {
  const { countryId, accountId, count, date } = await request.json();
  const existing = await prisma.callCount.findMany({
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
    const calls = await prisma.callCount.update({
      where: {
        id: existing[0].id,
      },
      data: {
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
        count: parseInt(count),
      },
    });
    return NextResponse.json({ message: "Zaktualizowano", calls });
  }
  const calls = await prisma.callCount.create({
    data: {
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
      count: parseInt(count),
      createdAt: new Date(date),
    },
  });
  return NextResponse.json({ message: "Dodano", calls });
}
