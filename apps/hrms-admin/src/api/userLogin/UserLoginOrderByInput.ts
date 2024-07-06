import { SortOrder } from "../../util/SortOrder";

export type UserLoginOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userMasterId?: SortOrder;
  username?: SortOrder;
  userType?: SortOrder;
};
