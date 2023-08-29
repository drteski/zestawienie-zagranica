import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(request) {
  const query = request.nextUrl.searchParams;
  const countryId = query.get("countryId");
  const accountId = query.get("accountId");
  const customInfo = await prisma.customInfo.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
    },
  });
  console.log([...customInfo]);
  return NextResponse.json([...customInfo]);
}

export async function POST(request) {
  const { countryId, accountId, info } = await request.json();
  const existing = await prisma.customInfo.findMany({
    where: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
    },
  });
  if (existing.length !== 0) {
    const customInfo = await prisma.customInfo.update({
      where: {
        id: existing[0].id,
      },
      data: {
        countryId: parseInt(countryId),
        accountId: parseInt(accountId),
        info,
      },
    });

    return NextResponse.json({ message: "Zaktualizowano", customInfo });
  }
  const customInfo = await prisma.customInfo.create({
    data: {
      countryId: parseInt(countryId),
      accountId: parseInt(accountId),
      info,
    },
  });
  return NextResponse.json({ message: "Dodano", customInfo });
}
