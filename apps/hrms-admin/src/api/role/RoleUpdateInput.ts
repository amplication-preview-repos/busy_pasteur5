import { EmployeeUpdateManyWithoutRolesInput } from "./EmployeeUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  employees?: EmployeeUpdateManyWithoutRolesInput;
  leaveBalance?: number | null;
  roleName?: string | null;
};
