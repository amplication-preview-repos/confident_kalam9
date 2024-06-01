import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscountReportServiceBase } from "./base/discountReport.service.base";

@Injectable()
export class DiscountReportService extends DiscountReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
