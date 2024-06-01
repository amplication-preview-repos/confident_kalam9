import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportingStatusService } from "./reportingStatus.service";
import { ReportingStatusControllerBase } from "./base/reportingStatus.controller.base";

@swagger.ApiTags("reportingStatuses")
@common.Controller("reportingStatuses")
export class ReportingStatusController extends ReportingStatusControllerBase {
  constructor(protected readonly service: ReportingStatusService) {
    super(service);
  }
}
