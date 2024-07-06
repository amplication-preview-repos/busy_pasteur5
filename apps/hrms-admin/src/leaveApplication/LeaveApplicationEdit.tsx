import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { LeaveTypeTitle } from "../leaveType/LeaveTypeTitle";

export const LeaveApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="justification" multiline source="justification" />
        <ReferenceInput
          source="leaveType.id"
          reference="LeaveType"
          label="LeaveType"
        >
          <SelectInput optionText={LeaveTypeTitle} />
        </ReferenceInput>
        <TextInput label="managerComment" multiline source="managerComment" />
        <DateTimeInput label="startDate" source="startDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
