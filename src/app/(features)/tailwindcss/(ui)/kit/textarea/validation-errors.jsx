import { ErrorMessage, Field, Label } from "@/ui/catalyst/fieldset";
import { Textarea } from "@/ui/catalyst/textarea";

export default function Example({ errors }) {
  return (
    <Field>
      <Label>Description</Label>
      <Textarea name="description" invalid={errors.has("description")} />
      {errors.has("description") && (
        <ErrorMessage>{errors.get("description")}</ErrorMessage>
      )}
    </Field>
  );
}
