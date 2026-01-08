import { Description, Field, Label } from "@/components/ui-kit/fieldset";
import { Textarea } from "@/components/ui-kit/textarea";

export default function Example() {
  return (
    <Field>
      <Label>Description</Label>
      <Description>This will be shown under the product title.</Description>
      <Textarea name="name" />
    </Field>
  );
}
