import { Field, Label } from "@/ui/catalyst/fieldset";
import { Textarea } from "@/ui/catalyst/textarea";

export default function Example() {
  return (
    <Field disabled>
      <Label>Description</Label>
      <Textarea name="description" />
    </Field>
  );
}
