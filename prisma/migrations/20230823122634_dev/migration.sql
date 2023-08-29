/*
  Warnings:

  - You are about to drop the column `accountId` on the `OrderCount` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderCount" DROP CONSTRAINT "OrderCount_accountId_fkey";

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "orderCountId" INTEGER;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "orderCountId" INTEGER;

-- AlterTable
ALTER TABLE "OrderCount" DROP COLUMN "accountId";

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_orderCountId_fkey" FOREIGN KEY ("orderCountId") REFERENCES "OrderCount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_orderCountId_fkey" FOREIGN KEY ("orderCountId") REFERENCES "OrderCount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
