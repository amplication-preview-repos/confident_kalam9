import { SortOrder } from "../../util/SortOrder";

export type DiscountReportOrderByInput = {
  approvedBy?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  discountDate?: SortOrder;
  discountReason?: SortOrder;
  id?: SortOrder;
  labNo?: SortOrder;
  panelName?: SortOrder;
  patientName?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
