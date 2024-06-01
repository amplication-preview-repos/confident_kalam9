import * as graphql from "@nestjs/graphql";
import { DepartmentReportResolverBase } from "./base/departmentReport.resolver.base";
import { DepartmentReport } from "./base/DepartmentReport";
import { DepartmentReportService } from "./departmentReport.service";

@graphql.Resolver(() => DepartmentReport)
export class DepartmentReportResolver extends DepartmentReportResolverBase {
  constructor(protected readonly service: DepartmentReportService) {
    super(service);
  }
}
