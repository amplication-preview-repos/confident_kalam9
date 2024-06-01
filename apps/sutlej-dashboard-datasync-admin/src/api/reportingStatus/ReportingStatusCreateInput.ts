export type ReportingStatusCreateInput = {
  approvedAt?: Date | null;
  date?: Date | null;
  deptNo?: string | null;
  doneBy?: string | null;
  investigationId?: string | null;
  isRepeat?: boolean | null;
  labNo?: string | null;
  patientId?: string | null;
  patientInAt?: Date | null;
  patientOutAt?: Date | null;
  repeatInAt?: Date | null;
  repeatOutAt?: Date | null;
  status?: string | null;
  testId?: string | null;
};
