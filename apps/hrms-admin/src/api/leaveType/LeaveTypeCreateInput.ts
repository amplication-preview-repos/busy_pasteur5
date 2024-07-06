import { LeaveApplicationCreateNestedManyWithoutLeaveTypesInput } from "./LeaveApplicationCreateNestedManyWithoutLeaveTypesInput";

export type LeaveTypeCreateInput = {
  active?: boolean | null;
  leaveApplications?: LeaveApplicationCreateNestedManyWithoutLeaveTypesInput;
  leaveDescription?: string | null;
  typeName?: string | null;
};
