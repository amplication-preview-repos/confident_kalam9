import { SortOrder } from "../../util/SortOrder";

export type CancelledReportOrderByInput = {
  cancelDate?: SortOrder;
  cancelledBy?: SortOrder;
  cancelReason?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  generatedBy?: SortOrder;
  id?: SortOrder;
  investigation?: SortOrder;
  labNo?: SortOrder;
  net?: SortOrder;
  paidAmount?: SortOrder;
  patientAge?: SortOrder;
  patientName?: SortOrder;
  paymentMode?: SortOrder;
  referredBy?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
