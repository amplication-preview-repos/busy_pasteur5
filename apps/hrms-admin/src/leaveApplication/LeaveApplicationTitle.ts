import { LeaveApplication as TLeaveApplication } from "../api/leaveApplication/LeaveApplication";

export const LEAVEAPPLICATION_TITLE_FIELD = "id";

export const LeaveApplicationTitle = (record: TLeaveApplication): string => {
  return record.id?.toString() || String(record.id);
};
