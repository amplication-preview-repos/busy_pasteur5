import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="employees"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="leaveBalance" source="leaveBalance" />
        <TextInput label="roleName" source="roleName" />
      </SimpleForm>
    </Create>
  );
};
