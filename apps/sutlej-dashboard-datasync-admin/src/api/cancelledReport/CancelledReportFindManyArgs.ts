import { CancelledReportWhereInput } from "./CancelledReportWhereInput";
import { CancelledReportOrderByInput } from "./CancelledReportOrderByInput";

export type CancelledReportFindManyArgs = {
  where?: CancelledReportWhereInput;
  orderBy?: Array<CancelledReportOrderByInput>;
  skip?: number;
  take?: number;
};
