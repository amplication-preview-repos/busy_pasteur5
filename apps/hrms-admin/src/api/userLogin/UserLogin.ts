import { UserMaster } from "../userMaster/UserMaster";

export type UserLogin = {
  createdAt: Date;
  id: string;
  password: string | null;
  updatedAt: Date;
  userId: string | null;
  userMaster?: UserMaster | null;
  username: string | null;
  userType: string | null;
};
