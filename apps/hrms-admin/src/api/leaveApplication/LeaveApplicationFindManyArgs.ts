import { LeaveApplicationWhereInput } from "./LeaveApplicationWhereInput";
import { LeaveApplicationOrderByInput } from "./LeaveApplicationOrderByInput";

export type LeaveApplicationFindManyArgs = {
  where?: LeaveApplicationWhereInput;
  orderBy?: Array<LeaveApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
