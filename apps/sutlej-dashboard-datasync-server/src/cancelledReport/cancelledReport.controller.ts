import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CancelledReportService } from "./cancelledReport.service";
import { CancelledReportControllerBase } from "./base/cancelledReport.controller.base";

@swagger.ApiTags("cancelledReports")
@common.Controller("cancelledReports")
export class CancelledReportController extends CancelledReportControllerBase {
  constructor(protected readonly service: CancelledReportService) {
    super(service);
  }
}
