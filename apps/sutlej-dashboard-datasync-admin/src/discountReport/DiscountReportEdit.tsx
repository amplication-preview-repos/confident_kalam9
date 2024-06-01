import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DiscountReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="approvedBy" source="approvedBy" />
        <NumberInput label="discount" source="discount" />
        <DateTimeInput label="discountDate" source="discountDate" />
        <TextInput label="discountReason" source="discountReason" />
        <TextInput label="labNo" source="labNo" />
        <TextInput label="panelName" source="panelName" />
        <TextInput label="patientName" source="patientName" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
