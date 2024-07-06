import { LeaveTypeWhereInput } from "./LeaveTypeWhereInput";
import { LeaveTypeOrderByInput } from "./LeaveTypeOrderByInput";

export type LeaveTypeFindManyArgs = {
  where?: LeaveTypeWhereInput;
  orderBy?: Array<LeaveTypeOrderByInput>;
  skip?: number;
  take?: number;
};
