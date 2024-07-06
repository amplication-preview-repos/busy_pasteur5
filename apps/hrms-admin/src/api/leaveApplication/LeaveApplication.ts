import { Employee } from "../employee/Employee";
import { LeaveType } from "../leaveType/LeaveType";

export type LeaveApplication = {
  createdAt: Date;
  employee?: Employee | null;
  employeeId: number | null;
  endDate: Date | null;
  id: string;
  justification: string | null;
  leaveType?: LeaveType | null;
  managerComment: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
