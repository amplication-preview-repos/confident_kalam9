import { ReportingStatusWhereInput } from "./ReportingStatusWhereInput";
import { ReportingStatusOrderByInput } from "./ReportingStatusOrderByInput";

export type ReportingStatusFindManyArgs = {
  where?: ReportingStatusWhereInput;
  orderBy?: Array<ReportingStatusOrderByInput>;
  skip?: number;
  take?: number;
};
