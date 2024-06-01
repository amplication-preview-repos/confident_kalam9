import { SortOrder } from "../../util/SortOrder";

export type DepartmentReportOrderByInput = {
  balance?: SortOrder;
  cash?: SortOrder;
  createdAt?: SortOrder;
  department?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  net?: SortOrder;
  online?: SortOrder;
  quantity?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
