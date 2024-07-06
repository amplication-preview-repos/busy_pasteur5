import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  manager?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
};
