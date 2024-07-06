import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AuditCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <TextInput label="updatedBy" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
