import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserMasterTitle } from "../userMaster/UserMasterTitle";

export const UserLoginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
