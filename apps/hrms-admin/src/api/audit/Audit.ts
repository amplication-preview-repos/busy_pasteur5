import { JsonValue } from "type-fest";

export type Audit = {
  createdAt: Date;
  id: string;
  newValue: JsonValue;
  oldValue: JsonValue;
  updatedAt: Date;
  updatedBy: string | null;
};
