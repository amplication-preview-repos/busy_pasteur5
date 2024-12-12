import { UserLoginCreateNestedManyWithoutUserMastersInput } from "./UserLoginCreateNestedManyWithoutUserMastersInput";

export type UserMasterCreateInput = {
  userLogins?: UserLoginCreateNestedManyWithoutUserMastersInput;
  userType?: "Option1" | null;
};
