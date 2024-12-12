import { UserLogin } from "../userLogin/UserLogin";

export type UserMaster = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userLogins?: Array<UserLogin>;
  userType?: "Option1" | null;
};
