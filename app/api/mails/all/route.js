import { NextResponse } from "next/server";
import prisma from "@/db";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";

export async function GET() {
  const mails = await prisma.mailCount.findMany({
    where: {
      createdAt: {
        lte: endOfMonth(endOfDay(new Date())),
        gte: startOfMonth(startOfDay(new Date())),
      },
    },
  });
  return NextResponse.json([...mails]);
}
