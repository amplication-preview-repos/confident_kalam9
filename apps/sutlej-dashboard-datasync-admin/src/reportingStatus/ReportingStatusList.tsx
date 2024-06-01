import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ReportingStatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReportingStatuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="approvedAt" source="approvedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="deptNo" source="deptNo" />
        <TextField label="doneBy" source="doneBy" />
        <TextField label="ID" source="id" />
        <TextField label="investigationId" source="investigationId" />
        <BooleanField label="isRepeat" source="isRepeat" />
        <TextField label="labNo" source="labNo" />
        <TextField label="patientId" source="patientId" />
        <TextField label="patientInAt" source="patientInAt" />
        <TextField label="patientOutAt" source="patientOutAt" />
        <TextField label="repeatInAt" source="repeatInAt" />
        <TextField label="repeatOutAt" source="repeatOutAt" />
        <TextField label="status" source="status" />
        <TextField label="testId" source="testId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
