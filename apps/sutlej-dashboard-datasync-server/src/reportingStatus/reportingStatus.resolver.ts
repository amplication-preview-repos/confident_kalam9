import * as graphql from "@nestjs/graphql";
import { ReportingStatusResolverBase } from "./base/reportingStatus.resolver.base";
import { ReportingStatus } from "./base/ReportingStatus";
import { ReportingStatusService } from "./reportingStatus.service";

@graphql.Resolver(() => ReportingStatus)
export class ReportingStatusResolver extends ReportingStatusResolverBase {
  constructor(protected readonly service: ReportingStatusService) {
    super(service);
  }
}
