import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, startOfDay } from "date-fns";

export async function GET(request) {
  const query = request.nextUrl.searchParams;
  const countryId = query.get("countryId");
  const accountId = query.get("accountId");
  const dateEnd = query.get("dateEnd");
  const dateStart = query.get("dateStart");
  const products = await prisma.productsCount.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      createdAt: {
        lte: new Date(dateEnd).toISOString(),
        gte: new Date(dateStart).toISOString(),
      },
    },
  });
  return NextResponse.json([...products]);
}

export async function POST(request) {
  const { countryId, accountId, count } = await request.json();
  const existing = await prisma.productsCount.findMany({
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
    const products = await prisma.productsCount.update({
      where: {
        id: existing[0].id,
      },
      data: {
        countryId: parseInt(countryId),
        accountId: parseInt(accountId),
        count: parseInt(count),
      },
    });
    return NextResponse.json({ message: "Zaktualizowano", products });
  }
  const products = await prisma.productsCount.create({
    data: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      count: parseInt(count),
    },
  });
  return NextResponse.json({ message: "Dodano", products });
}
