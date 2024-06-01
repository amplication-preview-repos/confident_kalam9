import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DiscountReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
