import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, startOfDay } from "date-fns";

export async function GET(request) {
  const query = request.nextUrl.searchParams;
  const countryId = query.get("countryId");
  const accountId = query.get("accountId");
  const dateEnd = query.get("dateEnd");
  const dateStart = query.get("dateStart");
  const calls = await prisma.callCount.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      createdAt: {
        lte: new Date(dateEnd).toISOString(),
        gte: new Date(dateStart).toISOString(),
      },
    },
  });
  return NextResponse.json([...calls]);
}

export async function POST(request) {
  const { countryId, accountId, count } = await request.json();
  const existing = await prisma.callCount.findMany({
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
    const calls = await prisma.callCount.update({
      where: {
        id: existing[0].id,
      },
      data: {
        countryId: parseInt(countryId),
        accountId: parseInt(accountId),
        count: parseInt(count),
      },
    });
    return NextResponse.json({ message: "Zaktualizowano", calls });
  }
  const calls = await prisma.callCount.create({
    data: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      count: parseInt(count),
    },
  });
  return NextResponse.json({ message: "Dodano", calls });
}
