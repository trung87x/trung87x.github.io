import {
  ErrorMessage,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Listbox,
  ListboxLabel,
  ListboxOption,
} from "@/features/tailwind-v4/components/ui-kit/listbox";

export default function Example({ errors }) {
  return (
    <Field invalid>
      <Label>Project status</Label>
      <Listbox
        name="status"
        placeholder="Select status&hellip;"
        invalid={errors.has("status")}
      >
        <ListboxOption value="active">
          <ListboxLabel>Active</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="paused">
          <ListboxLabel>Paused</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="delayed">
          <ListboxLabel>Delayed</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="canceled">
          <ListboxLabel>Canceled</ListboxLabel>
        </ListboxOption>
      </Listbox>
      {errors.has("status") && (
        <ErrorMessage>{errors.get("status")}</ErrorMessage>
      )}
    </Field>
  );
}
