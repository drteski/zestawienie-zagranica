/*
  Warnings:

  - You are about to drop the column `accountId` on the `Country` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_accountId_fkey";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "accountId";

-- CreateTable
CREATE TABLE "OrderCount" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrderCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AccountToCountry" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AccountToCountry_AB_unique" ON "_AccountToCountry"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountToCountry_B_index" ON "_AccountToCountry"("B");

-- AddForeignKey
ALTER TABLE "_AccountToCountry" ADD CONSTRAINT "_AccountToCountry_A_fkey" FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToCountry" ADD CONSTRAINT "_AccountToCountry_B_fkey" FOREIGN KEY ("B") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
