import { UserMaster as TUserMaster } from "../api/userMaster/UserMaster";

export const USERMASTER_TITLE_FIELD = "id";

export const UserMasterTitle = (record: TUserMaster): string => {
  return record.id?.toString() || String(record.id);
};
