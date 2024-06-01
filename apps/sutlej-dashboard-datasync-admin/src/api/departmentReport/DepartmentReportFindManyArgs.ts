import { DepartmentReportWhereInput } from "./DepartmentReportWhereInput";
import { DepartmentReportOrderByInput } from "./DepartmentReportOrderByInput";

export type DepartmentReportFindManyArgs = {
  where?: DepartmentReportWhereInput;
  orderBy?: Array<DepartmentReportOrderByInput>;
  skip?: number;
  take?: number;
};
