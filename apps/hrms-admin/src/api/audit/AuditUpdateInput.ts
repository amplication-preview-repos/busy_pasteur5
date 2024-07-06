import { InputJsonValue } from "../../types";

export type AuditUpdateInput = {
  newValue?: InputJsonValue;
  oldValue?: InputJsonValue;
  updatedBy?: string | null;
};
