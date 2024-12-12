import { LeaveType as TLeaveType } from "../api/leaveType/LeaveType";

export const LEAVETYPE_TITLE_FIELD = "typeName";

export const LeaveTypeTitle = (record: TLeaveType): string => {
  return record.typeName?.toString() || String(record.id);
};
