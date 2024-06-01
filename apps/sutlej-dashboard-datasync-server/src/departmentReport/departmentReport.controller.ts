import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepartmentReportService } from "./departmentReport.service";
import { DepartmentReportControllerBase } from "./base/departmentReport.controller.base";

@swagger.ApiTags("departmentReports")
@common.Controller("departmentReports")
export class DepartmentReportController extends DepartmentReportControllerBase {
  constructor(protected readonly service: DepartmentReportService) {
    super(service);
  }
}
