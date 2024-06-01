import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const CancelledReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="cancelDate" source="cancelDate" />
        <TextInput label="cancelledBy" source="cancelledBy" />
        <TextInput label="cancelReason" source="cancelReason" />
        <NumberInput label="discount" source="discount" />
        <TextInput label="generatedBy" source="generatedBy" />
        <TextInput label="investigation" source="investigation" />
        <TextInput label="labNo" source="labNo" />
        <NumberInput label="net" source="net" />
        <NumberInput label="paidAmount" source="paidAmount" />
        <NumberInput step={1} label="patientAge" source="patientAge" />
        <TextInput label="patientName" source="patientName" />
        <TextInput label="paymentMode" source="paymentMode" />
        <TextInput label="referredBy" source="referredBy" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
