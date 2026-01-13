import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Listbox,
  ListboxDescription,
  ListboxLabel,
  ListboxOption,
} from "@/features/tailwind-v4/components/ui-kit/listbox";

export default function Example({ users }) {
  return (
    <Field>
      <Label>User</Label>
      <Listbox name="user">
        {users.map((user) => (
          <ListboxOption key={user.id} value={user}>
            <ListboxLabel>{user.name}</ListboxLabel>
            <ListboxDescription>@{user.handle}</ListboxDescription>
          </ListboxOption>
        ))}
      </Listbox>
    </Field>
  );
}
