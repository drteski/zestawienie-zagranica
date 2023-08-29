/*
  Warnings:

  - You are about to drop the column `orderCountId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `orderCountId` on the `Country` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_orderCountId_fkey";

-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_orderCountId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "orderCountId";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "orderCountId";

-- AlterTable
ALTER TABLE "OrderCount" ADD COLUMN     "accountId" INTEGER,
ADD COLUMN     "countryId" INTEGER;

-- AddForeignKey
ALTER TABLE "OrderCount" ADD CONSTRAINT "OrderCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderCount" ADD CONSTRAINT "OrderCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
