/*
  Warnings:

  - A unique constraint covering the columns `[cnh]` on the table `Conductor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnh` to the `Conductor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Conductor` ADD COLUMN `cnh` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Conductor_cnh_key` ON `Conductor`(`cnh`);
