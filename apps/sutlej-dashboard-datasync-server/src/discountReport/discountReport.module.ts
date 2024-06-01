import { Module } from "@nestjs/common";
import { DiscountReportModuleBase } from "./base/discountReport.module.base";
import { DiscountReportService } from "./discountReport.service";
import { DiscountReportController } from "./discountReport.controller";
import { DiscountReportResolver } from "./discountReport.resolver";

@Module({
  imports: [DiscountReportModuleBase],
  controllers: [DiscountReportController],
  providers: [DiscountReportService, DiscountReportResolver],
  exports: [DiscountReportService],
})
export class DiscountReportModule {}
