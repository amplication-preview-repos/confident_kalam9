import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ReportingStatusCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="approvedAt" source="approvedAt" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="deptNo" source="deptNo" />
        <TextInput label="doneBy" source="doneBy" />
        <TextInput label="investigationId" source="investigationId" />
        <BooleanInput label="isRepeat" source="isRepeat" />
        <TextInput label="labNo" source="labNo" />
        <TextInput label="patientId" source="patientId" />
        <DateTimeInput label="patientInAt" source="patientInAt" />
        <DateTimeInput label="patientOutAt" source="patientOutAt" />
        <DateTimeInput label="repeatInAt" source="repeatInAt" />
        <DateTimeInput label="repeatOutAt" source="repeatOutAt" />
        <TextInput label="status" source="status" />
        <TextInput label="testId" source="testId" />
      </SimpleForm>
    </Create>
  );
};
