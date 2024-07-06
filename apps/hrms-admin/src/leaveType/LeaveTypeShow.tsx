import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { LEAVETYPE_TITLE_FIELD } from "./LeaveTypeTitle";

export const LeaveTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="leaveDescription" source="leaveDescription" />
        <TextField label="type" source="typeField" />
        <TextField label="typeName" source="typeName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LeaveApplication"
          target="leaveTypeId"
          label="LeaveApplications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="employeeId" source="employeeId" />
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="justification" source="justification" />
            <ReferenceField
              label="leaveType"
              source="leavetype.id"
              reference="LeaveType"
            >
              <TextField source={LEAVETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="managerComment" source="managerComment" />
            <TextField label="startDate" source="startDate" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
