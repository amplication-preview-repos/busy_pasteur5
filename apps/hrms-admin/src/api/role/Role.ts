import { Employee } from "../employee/Employee";

export type Role = {
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  leaveBalance: number | null;
  name: string | null;
  roleName: string | null;
  updatedAt: Date;
};
