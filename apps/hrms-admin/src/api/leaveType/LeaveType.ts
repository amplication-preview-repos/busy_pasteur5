import { LeaveApplication } from "../leaveApplication/LeaveApplication";

export type LeaveType = {
  active: boolean | null;
  createdAt: Date;
  id: string;
  leaveApplications?: Array<LeaveApplication>;
  leaveDescription: string | null;
  typeName: string | null;
  updatedAt: Date;
};
