import { SortOrder } from "../../util/SortOrder";

export type AuditOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  newValue?: SortOrder;
  oldValue?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
