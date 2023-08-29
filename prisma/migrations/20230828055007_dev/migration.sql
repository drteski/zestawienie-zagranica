-- CreateTable
CREATE TABLE "CustomInfo" (
    "id" SERIAL NOT NULL,
    "info" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "countryId" INTEGER,
    "accountId" INTEGER,

    CONSTRAINT "CustomInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomInfo" ADD CONSTRAINT "CustomInfo_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomInfo" ADD CONSTRAINT "CustomInfo_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
