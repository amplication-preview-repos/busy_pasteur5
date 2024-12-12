import { UserLogin as TUserLogin } from "../api/userLogin/UserLogin";

export const USERLOGIN_TITLE_FIELD = "username";

export const UserLoginTitle = (record: TUserLogin): string => {
  return record.username?.toString() || String(record.id);
};
