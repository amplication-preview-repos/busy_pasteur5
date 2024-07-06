import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AuditList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Audits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Action" source="action" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="newValue" source="newValue" />
        <TextField label="oldValue" source="oldValue" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="updatedBy" source="updatedBy" />
      </Datagrid>
    </List>
  );
};
