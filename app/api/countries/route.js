import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET() {
  const countries = await prisma.country.findMany({
    orderBy: {
      name: "desc",
    },
    include: {
      accounts: true,
    },
  });
  return NextResponse.json([...countries]);
}

export async function POST(request) {
  const name = await request.json();
  const existing = await prisma.country.findUnique({ where: name });
  if (existing) {
    return NextResponse.json({
      message: "Kraj o takiej nazwie już istnieje.",
    });
  }
  const country = await prisma.country.create({
    data: name,
  });
  return NextResponse.json({ message: "Kraj dodany", country });
}

export async function PUT(request) {
  const data = await request.json();
  const country = await prisma.country.findUnique({ where: { id: data.id } });
  if (country) {
    const existing = await prisma.country.findMany({
      where: { name: data.name },
    });
    if (existing.length !== 0) {
      return NextResponse.json({
        message: "Kraj o takiej nazwie już istnieje.",
      });
    }
    const updated = await prisma.country.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
      },
    });
    return NextResponse.json({
      message: "Zmieniono nazwę kraju",
      updated,
    });
  }
  return NextResponse.json({ message: "Nie znaleziono kraju" });
}
