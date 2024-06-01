import { SortOrder } from "../../util/SortOrder";

export type ReportingStatusOrderByInput = {
  approvedAt?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  deptNo?: SortOrder;
  doneBy?: SortOrder;
  id?: SortOrder;
  investigationId?: SortOrder;
  isRepeat?: SortOrder;
  labNo?: SortOrder;
  patientId?: SortOrder;
  patientInAt?: SortOrder;
  patientOutAt?: SortOrder;
  repeatInAt?: SortOrder;
  repeatOutAt?: SortOrder;
  status?: SortOrder;
  testId?: SortOrder;
  updatedAt?: SortOrder;
};
