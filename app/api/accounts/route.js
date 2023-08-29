import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET() {
  const accounts = await prisma.account.findMany({
    include: {
      country: true,
    },
  });
  return NextResponse.json([...accounts]);
}

export async function POST(request) {
  const data = await request.json();
  const existing = await prisma.account.findMany({
    where: { name: data.name },
  });
  if (existing.length !== 0) {
    return NextResponse.json({
      message: "Konto o takiej nazwie już istnieje.",
    });
  }
  const account = await prisma.account.create({
    data: {
      name: data.name,
    },
  });
  return NextResponse.json({ message: "Konto dodane", account });
}

export async function PUT(request) {
  const data = await request.json();
  if (data.state) {
    const account = await prisma.account.update({
      where: {
        id: parseInt(data.accountId),
      },
      data: {
        country: {
          connect: {
            id: parseInt(data.countryId),
          },
        },
      },
    });
    return NextResponse.json({ message: "Kraj przypisany", account });
  }

  if (!data.state) {
    const account = await prisma.account.update({
      where: {
        id: parseInt(data.accountId),
      },
      data: {
        country: {
          disconnect: {
            id: parseInt(data.countryId),
          },
        },
      },
    });
    return NextResponse.json({ message: "Kraj odłączony", account });
  }
}
