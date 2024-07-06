import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AuditWhereInput = {
  action?: StringNullableFilter;
  id?: StringFilter;
  newValue?: JsonFilter;
  oldValue?: JsonFilter;
  updatedBy?: StringNullableFilter;
};
