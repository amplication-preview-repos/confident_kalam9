import { Module } from "@nestjs/common";
import { DepartmentReportModuleBase } from "./base/departmentReport.module.base";
import { DepartmentReportService } from "./departmentReport.service";
import { DepartmentReportController } from "./departmentReport.controller";
import { DepartmentReportResolver } from "./departmentReport.resolver";

@Module({
  imports: [DepartmentReportModuleBase],
  controllers: [DepartmentReportController],
  providers: [DepartmentReportService, DepartmentReportResolver],
  exports: [DepartmentReportService],
})
export class DepartmentReportModule {}
