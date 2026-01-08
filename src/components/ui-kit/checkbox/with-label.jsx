import { Checkbox, CheckboxField } from "@/components/ui-kit/checkbox";
import { Label } from "@/components/ui-kit/fieldset";

export default function Example() {
  return (
    <CheckboxField>
      <Checkbox name="allow_embedding" />
      <Label>Allow embedding</Label>
    </CheckboxField>
  );
}
