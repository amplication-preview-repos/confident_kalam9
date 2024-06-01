import * as graphql from "@nestjs/graphql";
import { CancelledReportResolverBase } from "./base/cancelledReport.resolver.base";
import { CancelledReport } from "./base/CancelledReport";
import { CancelledReportService } from "./cancelledReport.service";

@graphql.Resolver(() => CancelledReport)
export class CancelledReportResolver extends CancelledReportResolverBase {
  constructor(protected readonly service: CancelledReportService) {
    super(service);
  }
}
