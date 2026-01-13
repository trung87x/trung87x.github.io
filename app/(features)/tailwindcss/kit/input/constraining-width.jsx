import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>CVC</Label>
      <Input className="max-w-24" name="cvc" pattern="[0-9]*" />
    </Field>
  );
}
