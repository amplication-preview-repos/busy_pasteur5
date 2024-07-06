import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AuditShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Action" source="action" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="newValue" source="newValue" />
        <TextField label="oldValue" source="oldValue" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="updatedBy" source="updatedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
