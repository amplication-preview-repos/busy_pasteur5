import { JsonValue } from "type-fest";

export type Audit = {
  action: string | null;
  createdAt: Date;
  id: string;
  newValue: JsonValue;
  oldValue: JsonValue;
  updatedAt: Date;
  updatedBy: string | null;
};
