export type DiscountReport = {
  approvedBy: string | null;
  createdAt: Date;
  discount: number | null;
  discountDate: Date | null;
  discountReason: string | null;
  id: string;
  labNo: string | null;
  panelName: string | null;
  patientName: string | null;
  total: number | null;
  updatedAt: Date;
};
