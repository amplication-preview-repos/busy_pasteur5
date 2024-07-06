import { InputJsonValue } from "../../types";

export type AuditUpdateInput = {
  action?: string | null;
  newValue?: InputJsonValue;
  oldValue?: InputJsonValue;
  updatedBy?: string | null;
};
