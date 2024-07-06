import { EmployeeCreateNestedManyWithoutRolesInput } from "./EmployeeCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutRolesInput;
  leaveBalance?: number | null;
  roleName?: string | null;
};
