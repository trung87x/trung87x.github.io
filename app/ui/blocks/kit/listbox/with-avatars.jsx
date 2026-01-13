import { Avatar } from "@/features/tailwind-v4/components/ui-kit/avatar";
import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Listbox,
  ListboxLabel,
  ListboxOption,
} from "@/features/tailwind-v4/components/ui-kit/listbox";

export default function Example({ users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      <Listbox name="user">
        {users.map((user) => (
          <ListboxOption key={user.id} value={user}>
            <Avatar
              src={user.avatarUrl}
              initials={user.initials}
              className="bg-purple-500 text-white"
              alt=""
            />
            <ListboxLabel>{user.name}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </Field>
  );
}
