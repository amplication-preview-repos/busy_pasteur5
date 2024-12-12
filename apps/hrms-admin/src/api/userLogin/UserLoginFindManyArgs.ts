import { UserLoginWhereInput } from "./UserLoginWhereInput";
import { UserLoginOrderByInput } from "./UserLoginOrderByInput";

export type UserLoginFindManyArgs = {
  where?: UserLoginWhereInput;
  orderBy?: Array<UserLoginOrderByInput>;
  skip?: number;
  take?: number;
};
