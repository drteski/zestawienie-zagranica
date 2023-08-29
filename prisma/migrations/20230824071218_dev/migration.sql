/*
  Warnings:

  - Made the column `countryId` on table `CallCount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accountId` on table `CallCount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `countryId` on table `MailCount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accountId` on table `MailCount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accountId` on table `OrderCount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `countryId` on table `OrderCount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `countryId` on table `ProductsCount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accountId` on table `ProductsCount` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CallCount" DROP CONSTRAINT "CallCount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "CallCount" DROP CONSTRAINT "CallCount_countryId_fkey";

-- DropForeignKey
ALTER TABLE "MailCount" DROP CONSTRAINT "MailCount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "MailCount" DROP CONSTRAINT "MailCount_countryId_fkey";

-- DropForeignKey
ALTER TABLE "OrderCount" DROP CONSTRAINT "OrderCount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "OrderCount" DROP CONSTRAINT "OrderCount_countryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsCount" DROP CONSTRAINT "ProductsCount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsCount" DROP CONSTRAINT "ProductsCount_countryId_fkey";

-- AlterTable
ALTER TABLE "CallCount" ALTER COLUMN "countryId" SET NOT NULL,
ALTER COLUMN "accountId" SET NOT NULL;

-- AlterTable
ALTER TABLE "MailCount" ALTER COLUMN "countryId" SET NOT NULL,
ALTER COLUMN "accountId" SET NOT NULL;

-- AlterTable
ALTER TABLE "OrderCount" ALTER COLUMN "accountId" SET NOT NULL,
ALTER COLUMN "countryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProductsCount" ALTER COLUMN "countryId" SET NOT NULL,
ALTER COLUMN "accountId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderCount" ADD CONSTRAINT "OrderCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderCount" ADD CONSTRAINT "OrderCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallCount" ADD CONSTRAINT "CallCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallCount" ADD CONSTRAINT "CallCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailCount" ADD CONSTRAINT "MailCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailCount" ADD CONSTRAINT "MailCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsCount" ADD CONSTRAINT "ProductsCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsCount" ADD CONSTRAINT "ProductsCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
