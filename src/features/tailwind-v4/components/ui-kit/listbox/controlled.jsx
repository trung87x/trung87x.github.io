import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Listbox,
  ListboxLabel,
  ListboxOption,
} from "@/features/tailwind-v4/components/ui-kit/listbox";
import { useState } from "react";

export default function Example() {
  let [status, setStatus] = useState("active");

  return (
    <Field>
      <Label>Project status</Label>
      <Listbox name="status" value={status} onChange={setStatus}>
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
    </Field>
  );
}
