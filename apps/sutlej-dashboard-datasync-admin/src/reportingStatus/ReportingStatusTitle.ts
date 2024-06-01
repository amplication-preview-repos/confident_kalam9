import { ReportingStatus as TReportingStatus } from "../api/reportingStatus/ReportingStatus";

export const REPORTINGSTATUS_TITLE_FIELD = "deptNo";

export const ReportingStatusTitle = (record: TReportingStatus): string => {
  return record.deptNo?.toString() || String(record.id);
};
