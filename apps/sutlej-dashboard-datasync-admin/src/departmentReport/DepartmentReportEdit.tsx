import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DepartmentReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="balance" source="balance" />
        <NumberInput step={1} label="cash" source="cash" />
        <TextInput label="department" source="department" />
        <NumberInput step={1} label="discount" source="discount" />
        <NumberInput step={1} label="net" source="net" />
        <NumberInput step={1} label="online" source="online" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput step={1} label="total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
