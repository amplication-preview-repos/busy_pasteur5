import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { LeaveTypeWhereUniqueInput } from "../leaveType/LeaveTypeWhereUniqueInput";

export type LeaveApplicationUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  justification?: string | null;
  leaveType?: LeaveTypeWhereUniqueInput | null;
  managerComment?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};
