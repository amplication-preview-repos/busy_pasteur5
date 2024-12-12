import { UserMasterWhereUniqueInput } from "../userMaster/UserMasterWhereUniqueInput";

export type UserLoginCreateInput = {
  password?: string | null;
  userId?: string | null;
  userMaster?: UserMasterWhereUniqueInput | null;
  username?: string | null;
  userType?: string | null;
};
