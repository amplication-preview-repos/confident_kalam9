import { DiscountReportWhereInput } from "./DiscountReportWhereInput";
import { DiscountReportOrderByInput } from "./DiscountReportOrderByInput";

export type DiscountReportFindManyArgs = {
  where?: DiscountReportWhereInput;
  orderBy?: Array<DiscountReportOrderByInput>;
  skip?: number;
  take?: number;
};
