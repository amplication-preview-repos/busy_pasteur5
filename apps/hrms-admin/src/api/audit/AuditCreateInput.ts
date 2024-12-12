import { InputJsonValue } from "../../types";

export type AuditCreateInput = {
  action?: string | null;
  newValue?: InputJsonValue;
  oldValue?: InputJsonValue;
  updatedBy?: string | null;
};
