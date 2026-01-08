import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>Your website</Label>
      <Input type="url" name="url" />
    </Field>
  );
}
