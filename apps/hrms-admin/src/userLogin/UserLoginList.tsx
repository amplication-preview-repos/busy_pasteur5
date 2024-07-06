import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERMASTER_TITLE_FIELD } from "../userMaster/UserMasterTitle";

export const UserLoginList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserLogins"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
