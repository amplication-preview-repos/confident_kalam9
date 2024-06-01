import { DepartmentReport as TDepartmentReport } from "../api/departmentReport/DepartmentReport";

export const DEPARTMENTREPORT_TITLE_FIELD = "department";

export const DepartmentReportTitle = (record: TDepartmentReport): string => {
  return record.department?.toString() || String(record.id);
};
