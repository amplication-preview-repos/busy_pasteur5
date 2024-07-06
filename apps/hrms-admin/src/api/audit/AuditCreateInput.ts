import { InputJsonValue } from "../../types";

export type AuditCreateInput = {
  newValue?: InputJsonValue;
  oldValue?: InputJsonValue;
  updatedBy?: string | null;
};
