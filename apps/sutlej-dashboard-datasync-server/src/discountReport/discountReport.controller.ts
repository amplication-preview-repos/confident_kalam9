import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscountReportService } from "./discountReport.service";
import { DiscountReportControllerBase } from "./base/discountReport.controller.base";

@swagger.ApiTags("discountReports")
@common.Controller("discountReports")
export class DiscountReportController extends DiscountReportControllerBase {
  constructor(protected readonly service: DiscountReportService) {
    super(service);
  }
}
