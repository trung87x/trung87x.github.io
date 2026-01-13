import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Listbox,
  ListboxLabel,
  ListboxOption,
} from "@/features/tailwind-v4/components/ui-kit/listbox";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-baseline justify-center gap-6">
      <Label>Project status</Label>
      <Listbox name="status" defaultValue="active" className="max-w-48">
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
    </Headless.Field>
  );
}
