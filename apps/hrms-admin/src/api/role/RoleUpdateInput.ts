import { EmployeeUpdateManyWithoutRolesInput } from "./EmployeeUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  employees?: EmployeeUpdateManyWithoutRolesInput;
  leaveBalance?: number | null;
  name?: string | null;
  roleName?: string | null;
};
