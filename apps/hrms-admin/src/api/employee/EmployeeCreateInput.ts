import { LeaveApplicationCreateNestedManyWithoutEmployeesInput } from "./LeaveApplicationCreateNestedManyWithoutEmployeesInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeCreateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaveApplications?: LeaveApplicationCreateNestedManyWithoutEmployeesInput;
  manager?: string | null;
  role?: RoleWhereUniqueInput | null;
};
