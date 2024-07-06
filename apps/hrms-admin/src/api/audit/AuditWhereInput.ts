import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AuditWhereInput = {
  id?: StringFilter;
  newValue?: JsonFilter;
  oldValue?: JsonFilter;
  updatedBy?: StringNullableFilter;
};
