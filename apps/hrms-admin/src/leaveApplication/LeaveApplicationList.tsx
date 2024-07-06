import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { LEAVETYPE_TITLE_FIELD } from "../leaveType/LeaveTypeTitle";

export const LeaveApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LeaveApplications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="justification" source="justification" />
        <ReferenceField
          label="leaveType"
          source="leavetype.id"
          reference="LeaveType"
        >
          <TextField source={LEAVETYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="managerComment" source="managerComment" />
        <TextField label="startDate" source="startDate" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
