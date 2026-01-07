import { Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";

export default function Example() {
  return (
    <Field disabled>
      <Label>Project status</Label>
      <Select name="status">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  );
}
