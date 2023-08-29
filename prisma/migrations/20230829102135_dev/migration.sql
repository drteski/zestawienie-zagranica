-- DropForeignKey
ALTER TABLE "CallCount" DROP CONSTRAINT "CallCount_countryId_fkey";

-- DropForeignKey
ALTER TABLE "CustomInfo" DROP CONSTRAINT "CustomInfo_countryId_fkey";

-- DropForeignKey
ALTER TABLE "MailCount" DROP CONSTRAINT "MailCount_countryId_fkey";

-- DropForeignKey
ALTER TABLE "OrderCount" DROP CONSTRAINT "OrderCount_countryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsCount" DROP CONSTRAINT "ProductsCount_countryId_fkey";

-- AddForeignKey
ALTER TABLE "OrderCount" ADD CONSTRAINT "OrderCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallCount" ADD CONSTRAINT "CallCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MailCount" ADD CONSTRAINT "MailCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsCount" ADD CONSTRAINT "ProductsCount_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomInfo" ADD CONSTRAINT "CustomInfo_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
