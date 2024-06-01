import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CancelledReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
