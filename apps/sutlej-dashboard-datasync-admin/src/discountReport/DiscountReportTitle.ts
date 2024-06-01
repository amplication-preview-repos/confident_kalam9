import { DiscountReport as TDiscountReport } from "../api/discountReport/DiscountReport";

export const DISCOUNTREPORT_TITLE_FIELD = "panelName";

export const DiscountReportTitle = (record: TDiscountReport): string => {
  return record.panelName?.toString() || String(record.id);
};
