import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay } from "date-fns";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  await prisma.OrderCount.deleteMany({
    where: {
      createdAt: {
        lte: endOfDay(new Date(date)),
      },
    },
  });
  await prisma.ReturnCount.deleteMany({
    where: {
      createdAt: {
        lte: endOfDay(new Date(date)),
      },
    },
  });
  await prisma.CorrectCount.deleteMany({
    where: {
      createdAt: {
        lte: endOfDay(new Date(date)),
      },
    },
  });
  await prisma.CallCount.deleteMany({
    where: {
      createdAt: {
        lte: endOfDay(new Date(date)),
      },
    },
  });
  await prisma.MailCount.deleteMany({
    where: {
      createdAt: {
        lte: endOfDay(new Date(date)),
      },
    },
  });

  return NextResponse.json({ message: "Usunięto" });
}
