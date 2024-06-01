export type CancelledReportCreateInput = {
  cancelDate?: Date | null;
  cancelledBy?: string | null;
  cancelReason?: string | null;
  discount?: number | null;
  generatedBy?: string | null;
  investigation?: string | null;
  labNo?: string | null;
  net?: number | null;
  paidAmount?: number | null;
  patientAge?: number | null;
  patientName?: string | null;
  paymentMode?: string | null;
  referredBy?: string | null;
  total?: number | null;
};
