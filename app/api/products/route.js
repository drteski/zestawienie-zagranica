import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";

export async function GET() {
  const products = await prisma.productsCount.findMany({
    where: {
      createdAt: {
        lte: endOfMonth(endOfDay(new Date())),
        gte: startOfMonth(startOfDay(new Date())),
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
