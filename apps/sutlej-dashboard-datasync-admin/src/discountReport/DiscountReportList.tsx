import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DiscountReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DiscountReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="approvedBy" source="approvedBy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="discount" source="discount" />
        <TextField label="discountDate" source="discountDate" />
        <TextField label="discountReason" source="discountReason" />
        <TextField label="ID" source="id" />
        <TextField label="labNo" source="labNo" />
        <TextField label="panelName" source="panelName" />
        <TextField label="patientName" source="patientName" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
