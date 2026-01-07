import { Field, Label } from "@/components/ui-kit/fieldset";
import { Textarea } from "@/components/ui-kit/textarea";

export default function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" />
    </Field>
  );
}
