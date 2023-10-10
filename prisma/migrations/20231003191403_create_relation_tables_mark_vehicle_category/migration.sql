-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_markId_fkey` FOREIGN KEY (`markId`) REFERENCES `Mark`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
