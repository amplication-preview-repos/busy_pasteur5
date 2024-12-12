import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveApplicationListRelationFilter } from "../leaveApplication/LeaveApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LeaveTypeWhereInput = {
  active?: BooleanNullableFilter;
  id?: StringFilter;
  leaveApplications?: LeaveApplicationListRelationFilter;
  leaveDescription?: StringNullableFilter;
  typeField?: StringNullableFilter;
  typeName?: StringNullableFilter;
};
