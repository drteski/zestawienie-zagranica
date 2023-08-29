-- AlterTable
ALTER TABLE "OrderCount" ADD COLUMN     "accountId" INTEGER;

-- AddForeignKey
ALTER TABLE "OrderCount" ADD CONSTRAINT "OrderCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
