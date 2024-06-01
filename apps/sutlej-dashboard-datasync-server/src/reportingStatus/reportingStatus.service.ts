import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportingStatusServiceBase } from "./base/reportingStatus.service.base";

@Injectable()
export class ReportingStatusService extends ReportingStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
