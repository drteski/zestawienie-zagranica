import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET() {
  const products = await prisma.productsCount.findMany();
  return NextResponse.json([...products]);
}

export async function POST(request) {
  const { countryId, accountId, count } = await request.json();
  const existing = await prisma.productsCount.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
    },
  });
  if (existing.length !== 0) {
    const products = await prisma.productsCount.update({
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
    return NextResponse.json({ message: "Zaktualizowano", products });
  }
  const products = await prisma.productsCount.create({
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
  return NextResponse.json({ message: "Dodano", products });
}
