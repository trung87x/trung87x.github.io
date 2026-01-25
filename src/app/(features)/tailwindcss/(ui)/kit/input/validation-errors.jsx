import { ErrorMessage, Field, Label } from "@/ui/catalyst/fieldset";
import { Input } from "@/ui/catalyst/input";

export default function Example({ errors }) {
  return (
    <Field>
      <Label>Full name</Label>
      <Input name="full_name" invalid={errors.has("full_name")} />
      {errors.has("full_name") && (
        <ErrorMessage>{errors.get("full_name")}</ErrorMessage>
      )}
    </Field>
  );
}
