import { SortOrder } from "../../util/SortOrder";

export type AuditOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  newValue?: SortOrder;
  oldValue?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
