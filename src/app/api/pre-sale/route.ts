import { PrismaClient } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function main(data: any) {
  // ... you will write your Prisma Client queries here
  await prisma.presale.create({ data });
}

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const res = await main(body)
    .then(async () => {
      await prisma.$disconnect();
      return NextResponse.json("zzs");
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      return NextResponse.error();
    });

  return res;
};
