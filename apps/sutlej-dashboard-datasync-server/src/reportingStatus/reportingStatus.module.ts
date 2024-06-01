import { Module } from "@nestjs/common";
import { ReportingStatusModuleBase } from "./base/reportingStatus.module.base";
import { ReportingStatusService } from "./reportingStatus.service";
import { ReportingStatusController } from "./reportingStatus.controller";
import { ReportingStatusResolver } from "./reportingStatus.resolver";

@Module({
  imports: [ReportingStatusModuleBase],
  controllers: [ReportingStatusController],
  providers: [ReportingStatusService, ReportingStatusResolver],
  exports: [ReportingStatusService],
})
export class ReportingStatusModule {}
