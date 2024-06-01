import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DepartmentReportWhereInput = {
  balance?: IntNullableFilter;
  cash?: IntNullableFilter;
  department?: StringNullableFilter;
  discount?: IntNullableFilter;
  id?: StringFilter;
  net?: IntNullableFilter;
  online?: IntNullableFilter;
  quantity?: IntNullableFilter;
  total?: IntNullableFilter;
};
