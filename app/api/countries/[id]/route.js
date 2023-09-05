import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(request, { params }) {
  const country = await prisma.country.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      accounts: true,
    },
  });
  return NextResponse.json({ ...country });
}

export async function DELETE(request, { params }) {
  const country = await prisma.country.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json({ message: "Kraj usunięty", country });
}
