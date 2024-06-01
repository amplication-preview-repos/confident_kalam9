import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CancelledReportWhereInput = {
  cancelDate?: DateTimeNullableFilter;
  cancelledBy?: StringNullableFilter;
  cancelReason?: StringNullableFilter;
  discount?: FloatNullableFilter;
  generatedBy?: StringNullableFilter;
  id?: StringFilter;
  investigation?: StringNullableFilter;
  labNo?: StringNullableFilter;
  net?: FloatNullableFilter;
  paidAmount?: FloatNullableFilter;
  patientAge?: IntNullableFilter;
  patientName?: StringNullableFilter;
  paymentMode?: StringNullableFilter;
  referredBy?: StringNullableFilter;
  total?: FloatNullableFilter;
};
