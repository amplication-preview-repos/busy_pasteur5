import { UserMasterWhereInput } from "./UserMasterWhereInput";
import { UserMasterOrderByInput } from "./UserMasterOrderByInput";

export type UserMasterFindManyArgs = {
  where?: UserMasterWhereInput;
  orderBy?: Array<UserMasterOrderByInput>;
  skip?: number;
  take?: number;
};
