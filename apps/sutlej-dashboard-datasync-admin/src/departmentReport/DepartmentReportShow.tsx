import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DepartmentReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
