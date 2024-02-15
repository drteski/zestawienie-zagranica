import { NextResponse } from "next/server";
import prisma from "@/db";
export const dynamic = "force-dynamic";
export async function GET(request, { params }) {
  const account = await prisma.account.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json({ ...account });
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const account = await prisma.account.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (account) {
    const existing = await prisma.account.findMany({
      where: { name: data.name },
    });
    if (existing.length !== 0) {
      return NextResponse.json({
        message: "Konto o takiej nazwie już istnieje.",
      });
    }
    const updated = await prisma.account.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name: data.name,
      },
    });
    return NextResponse.json({
      message: "Zmieniono nazwę konta",
      updated,
    });
  }
  return NextResponse.json({ message: "Nie znaleziono konta" });
}

export async function DELETE(request, { params }) {
  const account = await prisma.account.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json({ message: "Konto usunięte", account });
}
