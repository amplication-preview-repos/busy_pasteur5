import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserMasterWhereUniqueInput } from "../userMaster/UserMasterWhereUniqueInput";

export type UserLoginWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  userId?: StringNullableFilter;
  userMaster?: UserMasterWhereUniqueInput;
  username?: StringNullableFilter;
  userType?: StringNullableFilter;
};
