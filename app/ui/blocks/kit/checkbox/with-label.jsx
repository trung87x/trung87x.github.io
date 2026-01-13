import {
  Checkbox,
  CheckboxField,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";

export default function Example() {
  return (
    <CheckboxField>
      <Checkbox name="allow_embedding" />
      <Label>Allow embedding</Label>
    </CheckboxField>
  );
}
