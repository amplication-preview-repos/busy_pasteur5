import { Audit as TAudit } from "../api/audit/Audit";

export const AUDIT_TITLE_FIELD = "action";

export const AuditTitle = (record: TAudit): string => {
  return record.action?.toString() || String(record.id);
};
