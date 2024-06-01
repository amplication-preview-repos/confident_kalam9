import { CancelledReport as TCancelledReport } from "../api/cancelledReport/CancelledReport";

export const CANCELLEDREPORT_TITLE_FIELD = "patientName";

export const CancelledReportTitle = (record: TCancelledReport): string => {
  return record.patientName?.toString() || String(record.id);
};
