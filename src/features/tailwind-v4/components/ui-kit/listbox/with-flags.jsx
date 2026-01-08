import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Listbox,
  ListboxLabel,
  ListboxOption,
} from "@/features/tailwind-v4/components/ui-kit/listbox";
import { Flag } from "@/flags";

export default function Example({ currentCountry, countries }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Listbox name="user" defaultValue={currentCountry}>
        {countries.map((country) => (
          <ListboxOption value={country.code} key={country.code}>
            <Flag className="w-5 sm:w-4" code={country.code} />
            <ListboxLabel>{country.name}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </Field>
  );
}
