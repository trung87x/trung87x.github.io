import {
  ErrorMessage,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";

export default function Example({ errors }) {
  return (
    <Field>
      <Label>Project status</Label>
      <Select name="status" defaultValue="" invalid={errors.has("status")}>
        <option value="" disabled>
          Select a status&hellip;
        </option>
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
      {errors.has("status") && (
        <ErrorMessage>{errors.get("status")}</ErrorMessage>
      )}
    </Field>
  );
}
