import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USERMASTER_TITLE_FIELD } from "../userMaster/UserMasterTitle";

export const UserLoginShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
