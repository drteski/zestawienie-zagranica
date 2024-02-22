import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";

export const dynamic = "force-dynamic";

export async function GET() {
  const totalCount = await prisma.ProductsTotalCount.findMany();
  return NextResponse.json([...totalCount]);
}

export async function POST(request) {
  const { countryId, accountId, count } = await request.json();
  const existing = await prisma.productsTotalCount.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
    },
  });
  if (existing.length !== 0) {
    const totalCount = await prisma.productsTotalCount.update({
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
    return NextResponse.json({ message: "Zaktualizowano", totalCount });
  }
  const totalCount = await prisma.productsTotalCount.create({
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
  return NextResponse.json({ message: "Dodano", totalCount });
}
