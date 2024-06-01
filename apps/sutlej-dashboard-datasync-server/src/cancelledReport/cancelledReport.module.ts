import { Module } from "@nestjs/common";
import { CancelledReportModuleBase } from "./base/cancelledReport.module.base";
import { CancelledReportService } from "./cancelledReport.service";
import { CancelledReportController } from "./cancelledReport.controller";
import { CancelledReportResolver } from "./cancelledReport.resolver";

@Module({
  imports: [CancelledReportModuleBase],
  controllers: [CancelledReportController],
  providers: [CancelledReportService, CancelledReportResolver],
  exports: [CancelledReportService],
})
export class CancelledReportModule {}
