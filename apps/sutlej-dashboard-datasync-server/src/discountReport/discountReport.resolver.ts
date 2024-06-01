import * as graphql from "@nestjs/graphql";
import { DiscountReportResolverBase } from "./base/discountReport.resolver.base";
import { DiscountReport } from "./base/DiscountReport";
import { DiscountReportService } from "./discountReport.service";

@graphql.Resolver(() => DiscountReport)
export class DiscountReportResolver extends DiscountReportResolverBase {
  constructor(protected readonly service: DiscountReportService) {
    super(service);
  }
}
