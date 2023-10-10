-- DropForeignKey
ALTER TABLE `Vehicle` DROP FOREIGN KEY `Vehicle_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Vehicle` DROP FOREIGN KEY `Vehicle_markId_fkey`;

-- AlterTable
ALTER TABLE `Vehicle` MODIFY `markId` INTEGER NULL,
    MODIFY `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_markId_fkey` FOREIGN KEY (`markId`) REFERENCES `Mark`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
