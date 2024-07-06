import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const AuditShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
