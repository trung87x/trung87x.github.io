import { Field, Label } from "@/ui/catalyst/fieldset";
import { Input } from "@/ui/catalyst/input";

export default function Example() {
  return (
    <Field disabled>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  );
}
