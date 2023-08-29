-- DropForeignKey
ALTER TABLE "CallCount" DROP CONSTRAINT "CallCount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "CustomInfo" DROP CONSTRAINT "CustomInfo_accountId_fkey";

-- DropForeignKey
ALTER TABLE "MailCount" DROP CONSTRAINT "MailCount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "OrderCount" DROP CONSTRAINT "OrderCount_accountId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsCount" DROP CONSTRAINT "ProductsCount_accountId_fkey";

-- AddForeignKey
ALTER TABLE "OrderCount" ADD CONSTRAINT "OrderCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallCount" ADD CONSTRAINT "CallCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailCount" ADD CONSTRAINT "MailCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsCount" ADD CONSTRAINT "ProductsCount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomInfo" ADD CONSTRAINT "CustomInfo_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
