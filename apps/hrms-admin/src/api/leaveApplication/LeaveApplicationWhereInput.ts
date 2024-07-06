import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LeaveTypeWhereUniqueInput } from "../leaveType/LeaveTypeWhereUniqueInput";

export type LeaveApplicationWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  employeeId?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  justification?: StringNullableFilter;
  leaveType?: LeaveTypeWhereUniqueInput;
  managerComment?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
