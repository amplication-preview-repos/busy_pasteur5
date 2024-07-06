import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERMASTER_TITLE_FIELD } from "./UserMasterTitle";

export const UserMasterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userType" source="userType" />
        <ReferenceManyField
          reference="UserLogin"
          target="userMasterId"
          label="UserLogins"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="password" source="password" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userId" source="userId" />
            <ReferenceField
              label="userMaster"
              source="usermaster.id"
              reference="UserMaster"
            >
              <TextField source={USERMASTER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="username" source="username" />
            <TextField label="userType" source="userType" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
