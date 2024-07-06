import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { LeaveTypeList } from "./leaveType/LeaveTypeList";
import { LeaveTypeCreate } from "./leaveType/LeaveTypeCreate";
import { LeaveTypeEdit } from "./leaveType/LeaveTypeEdit";
import { LeaveTypeShow } from "./leaveType/LeaveTypeShow";
import { LeaveApplicationList } from "./leaveApplication/LeaveApplicationList";
import { LeaveApplicationCreate } from "./leaveApplication/LeaveApplicationCreate";
import { LeaveApplicationEdit } from "./leaveApplication/LeaveApplicationEdit";
import { LeaveApplicationShow } from "./leaveApplication/LeaveApplicationShow";
import { AuditList } from "./audit/AuditList";
import { AuditCreate } from "./audit/AuditCreate";
import { AuditEdit } from "./audit/AuditEdit";
import { AuditShow } from "./audit/AuditShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HRMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="LeaveType"
          list={LeaveTypeList}
          edit={LeaveTypeEdit}
          create={LeaveTypeCreate}
          show={LeaveTypeShow}
        />
        <Resource
          name="LeaveApplication"
          list={LeaveApplicationList}
          edit={LeaveApplicationEdit}
          create={LeaveApplicationCreate}
          show={LeaveApplicationShow}
        />
        <Resource
          name="Audit"
          list={AuditList}
          edit={AuditEdit}
          create={AuditCreate}
          show={AuditShow}
        />
      </Admin>
    </div>
  );
};

export default App;
