import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LeaveTypeWhereUniqueInput } from "../leaveType/LeaveTypeWhereUniqueInput";

export type LeaveApplicationWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  justification?: StringNullableFilter;
  leaveType?: LeaveTypeWhereUniqueInput;
  managerComment?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
