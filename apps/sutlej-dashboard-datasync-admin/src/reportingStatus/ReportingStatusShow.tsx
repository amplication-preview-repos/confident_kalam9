import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ReportingStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
