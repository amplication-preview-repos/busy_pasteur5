import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { LeaveTypeWhereUniqueInput } from "../leaveType/LeaveTypeWhereUniqueInput";

export type LeaveApplicationCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  employeeId?: number | null;
  endDate?: Date | null;
  justification?: string | null;
  leaveType?: LeaveTypeWhereUniqueInput | null;
  managerComment?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};
