import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

export default function Example() {
  return (
    <Field disabled>
      <Label>Full name</Label>
      <Input name="full_name" />
    </Field>
  );
}
