import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { LeaveApplicationTitle } from "../leaveApplication/LeaveApplicationTitle";

export const LeaveTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <ReferenceArrayInput
          source="leaveApplications"
          reference="LeaveApplication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveApplicationTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="leaveDescription"
          multiline
          source="leaveDescription"
        />
        <TextInput label="typeName" source="typeName" />
      </SimpleForm>
    </Edit>
  );
};
