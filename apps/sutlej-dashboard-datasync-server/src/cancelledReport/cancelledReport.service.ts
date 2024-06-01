import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CancelledReportServiceBase } from "./base/cancelledReport.service.base";

@Injectable()
export class CancelledReportService extends CancelledReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
