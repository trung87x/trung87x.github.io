import { Field, Label } from "@/ui/catalyst/fieldset";
import { Input } from "@/ui/catalyst/input";

export default function Example() {
  return (
    <Field>
      <Label>Your website</Label>
      <Input type="url" name="url" />
    </Field>
  );
}
