import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AuditEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <TextInput label="updatedBy" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
