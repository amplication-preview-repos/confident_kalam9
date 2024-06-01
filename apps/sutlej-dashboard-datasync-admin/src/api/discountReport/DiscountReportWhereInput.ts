import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiscountReportWhereInput = {
  approvedBy?: StringNullableFilter;
  discount?: FloatNullableFilter;
  discountDate?: DateTimeNullableFilter;
  discountReason?: StringNullableFilter;
  id?: StringFilter;
  labNo?: StringNullableFilter;
  panelName?: StringNullableFilter;
  patientName?: StringNullableFilter;
  total?: FloatNullableFilter;
};
