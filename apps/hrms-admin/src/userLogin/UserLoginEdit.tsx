import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserMasterTitle } from "../userMaster/UserMasterTitle";

export const UserLoginEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
        <TextInput label="userId" source="userId" />
        <ReferenceInput
          source="userMaster.id"
          reference="UserMaster"
          label="userMaster"
        >
          <SelectInput optionText={UserMasterTitle} />
        </ReferenceInput>
        <TextInput label="username" source="username" />
        <TextInput label="userType" source="userType" />
      </SimpleForm>
    </Edit>
  );
};
