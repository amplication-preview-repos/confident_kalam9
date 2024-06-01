import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ReportingStatusWhereInput = {
  approvedAt?: DateTimeNullableFilter;
  date?: DateTimeNullableFilter;
  deptNo?: StringNullableFilter;
  doneBy?: StringNullableFilter;
  id?: StringFilter;
  investigationId?: StringNullableFilter;
  isRepeat?: BooleanNullableFilter;
  labNo?: StringNullableFilter;
  patientId?: StringNullableFilter;
  patientInAt?: DateTimeNullableFilter;
  patientOutAt?: DateTimeNullableFilter;
  repeatInAt?: DateTimeNullableFilter;
  repeatOutAt?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  testId?: StringNullableFilter;
};
