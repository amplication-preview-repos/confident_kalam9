import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CancelledReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CancelledReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cancelDate" source="cancelDate" />
        <TextField label="cancelledBy" source="cancelledBy" />
        <TextField label="cancelReason" source="cancelReason" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="discount" source="discount" />
        <TextField label="generatedBy" source="generatedBy" />
        <TextField label="ID" source="id" />
        <TextField label="investigation" source="investigation" />
        <TextField label="labNo" source="labNo" />
        <TextField label="net" source="net" />
        <TextField label="paidAmount" source="paidAmount" />
        <TextField label="patientAge" source="patientAge" />
        <TextField label="patientName" source="patientName" />
        <TextField label="paymentMode" source="paymentMode" />
        <TextField label="referredBy" source="referredBy" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
