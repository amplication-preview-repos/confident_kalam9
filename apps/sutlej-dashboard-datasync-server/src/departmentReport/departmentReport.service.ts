import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepartmentReportServiceBase } from "./base/departmentReport.service.base";

@Injectable()
export class DepartmentReportService extends DepartmentReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
