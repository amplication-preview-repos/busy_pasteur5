import { LeaveApplicationUpdateManyWithoutEmployeesInput } from "./LeaveApplicationUpdateManyWithoutEmployeesInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeUpdateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaveApplications?: LeaveApplicationUpdateManyWithoutEmployeesInput;
  manager?: string | null;
  role?: RoleWhereUniqueInput | null;
};
