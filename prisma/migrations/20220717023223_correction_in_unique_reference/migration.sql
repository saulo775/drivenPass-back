/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,title]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,title]` on the table `securityNotes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,title]` on the table `wifi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "cards_id_title_key";

-- DropIndex
DROP INDEX "credentials_id_title_key";

-- DropIndex
DROP INDEX "securityNotes_id_title_key";

-- DropIndex
DROP INDEX "wifi_id_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "cards_userId_title_key" ON "cards"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_userId_title_key" ON "credentials"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "securityNotes_userId_title_key" ON "securityNotes"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "wifi_userId_title_key" ON "wifi"("userId", "title");
