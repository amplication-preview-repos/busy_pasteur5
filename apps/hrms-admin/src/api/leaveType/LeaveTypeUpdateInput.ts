import { LeaveApplicationUpdateManyWithoutLeaveTypesInput } from "./LeaveApplicationUpdateManyWithoutLeaveTypesInput";

export type LeaveTypeUpdateInput = {
  active?: boolean | null;
  leaveApplications?: LeaveApplicationUpdateManyWithoutLeaveTypesInput;
  leaveDescription?: string | null;
  typeName?: string | null;
};
