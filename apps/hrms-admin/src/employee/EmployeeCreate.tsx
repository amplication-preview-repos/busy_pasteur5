import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LeaveApplicationTitle } from "../leaveApplication/LeaveApplicationTitle";
import { RoleTitle } from "../role/RoleTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="leaveApplications"
          reference="LeaveApplication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveApplicationTitle} />
        </ReferenceArrayInput>
        <TextInput label="manager" source="manager" />
        <ReferenceInput source="role.id" reference="Role" label="role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
