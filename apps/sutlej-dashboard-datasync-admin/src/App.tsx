import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReportingStatusList } from "./reportingStatus/ReportingStatusList";
import { ReportingStatusCreate } from "./reportingStatus/ReportingStatusCreate";
import { ReportingStatusEdit } from "./reportingStatus/ReportingStatusEdit";
import { ReportingStatusShow } from "./reportingStatus/ReportingStatusShow";
import { DepartmentReportList } from "./departmentReport/DepartmentReportList";
import { DepartmentReportCreate } from "./departmentReport/DepartmentReportCreate";
import { DepartmentReportEdit } from "./departmentReport/DepartmentReportEdit";
import { DepartmentReportShow } from "./departmentReport/DepartmentReportShow";
import { CancelledReportList } from "./cancelledReport/CancelledReportList";
import { CancelledReportCreate } from "./cancelledReport/CancelledReportCreate";
import { CancelledReportEdit } from "./cancelledReport/CancelledReportEdit";
import { CancelledReportShow } from "./cancelledReport/CancelledReportShow";
import { DiscountReportList } from "./discountReport/DiscountReportList";
import { DiscountReportCreate } from "./discountReport/DiscountReportCreate";
import { DiscountReportEdit } from "./discountReport/DiscountReportEdit";
import { DiscountReportShow } from "./discountReport/DiscountReportShow";
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
        title={"sutlej-dashboard-datasync"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ReportingStatus"
          list={ReportingStatusList}
          edit={ReportingStatusEdit}
          create={ReportingStatusCreate}
          show={ReportingStatusShow}
        />
        <Resource
          name="DepartmentReport"
          list={DepartmentReportList}
          edit={DepartmentReportEdit}
          create={DepartmentReportCreate}
          show={DepartmentReportShow}
        />
        <Resource
          name="CancelledReport"
          list={CancelledReportList}
          edit={CancelledReportEdit}
          create={CancelledReportCreate}
          show={CancelledReportShow}
        />
        <Resource
          name="DiscountReport"
          list={DiscountReportList}
          edit={DiscountReportEdit}
          create={DiscountReportCreate}
          show={DiscountReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
