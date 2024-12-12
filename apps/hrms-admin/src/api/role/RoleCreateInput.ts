import { EmployeeCreateNestedManyWithoutRolesInput } from "./EmployeeCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutRolesInput;
  leaveBalance?: number | null;
  name?: string | null;
  roleName?: string | null;
};
