import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveApplicationListRelationFilter } from "../leaveApplication/LeaveApplicationListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeWhereInput = {
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaveApplications?: LeaveApplicationListRelationFilter;
  manager?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
};
