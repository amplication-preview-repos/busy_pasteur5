import { StringFilter } from "../../util/StringFilter";
import { UserLoginListRelationFilter } from "../userLogin/UserLoginListRelationFilter";

export type UserMasterWhereInput = {
  id?: StringFilter;
  userLogins?: UserLoginListRelationFilter;
  userType?: "Option1";
};
