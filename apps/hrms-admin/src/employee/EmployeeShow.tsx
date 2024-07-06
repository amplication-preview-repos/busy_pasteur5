import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { LEAVETYPE_TITLE_FIELD } from "../leaveType/LeaveTypeTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="manager" source="manager" />
        <ReferenceField label="role" source="role.id" reference="Role">
          <TextField source={ROLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LeaveApplication"
          target="employeeId"
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
