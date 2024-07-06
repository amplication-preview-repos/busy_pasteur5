import { LeaveApplication } from "../leaveApplication/LeaveApplication";
import { Role } from "../role/Role";

export type Employee = {
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  leaveApplications?: Array<LeaveApplication>;
  manager: string | null;
  role?: Role | null;
  updatedAt: Date;
};
