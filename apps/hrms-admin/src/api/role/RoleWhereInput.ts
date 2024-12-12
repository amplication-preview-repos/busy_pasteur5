import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  leaveBalance?: IntNullableFilter;
  name?: StringNullableFilter;
  roleName?: StringNullableFilter;
};
