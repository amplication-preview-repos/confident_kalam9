import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DepartmentReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DepartmentReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="balance" source="balance" />
        <TextField label="cash" source="cash" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="department" source="department" />
        <TextField label="discount" source="discount" />
        <TextField label="ID" source="id" />
        <TextField label="net" source="net" />
        <TextField label="online" source="online" />
        <TextField label="quantity" source="quantity" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
