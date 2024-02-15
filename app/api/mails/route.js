import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";
export const dynamic = "force-dynamic";
export async function GET() {
  const mails = await prisma.mailCount.findMany({
    where: {
      createdAt: {
        lte: endOfMonth(endOfDay(new Date())),
        gte: startOfMonth(startOfDay(new Date())),
      },
    },
  });
  return NextResponse.json([...mails]);
}

export async function POST(request) {
  const { countryId, accountId, count } = await request.json();
  const existing = await prisma.mailCount.findMany({
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
    const mails = await prisma.mailCount.update({
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
    return NextResponse.json({ message: "Zaktualizowano", mails });
  }
  const mails = await prisma.mailCount.create({
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
  return NextResponse.json({ message: "Dodano", mails });
}
