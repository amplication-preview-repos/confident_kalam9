export type ReportingStatus = {
  approvedAt: Date | null;
  createdAt: Date;
  date: Date | null;
  deptNo: string | null;
  doneBy: string | null;
  id: string;
  investigationId: string | null;
  isRepeat: boolean | null;
  labNo: string | null;
  patientId: string | null;
  patientInAt: Date | null;
  patientOutAt: Date | null;
  repeatInAt: Date | null;
  repeatOutAt: Date | null;
  status: string | null;
  testId: string | null;
  updatedAt: Date;
};
