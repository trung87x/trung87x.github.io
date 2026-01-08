import {
  ErrorMessage,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

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
