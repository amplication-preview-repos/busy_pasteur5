import { Audit as TAudit } from "../api/audit/Audit";

export const AUDIT_TITLE_FIELD = "updatedBy";

export const AuditTitle = (record: TAudit): string => {
  return record.updatedBy?.toString() || String(record.id);
};
