/*
  Warnings:

  - Made the column `markId` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryId` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Vehicle` DROP FOREIGN KEY `Vehicle_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Vehicle` DROP FOREIGN KEY `Vehicle_markId_fkey`;

-- AlterTable
ALTER TABLE `Vehicle` MODIFY `markId` INTEGER NOT NULL,
    MODIFY `categoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_markId_fkey` FOREIGN KEY (`markId`) REFERENCES `Mark`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
