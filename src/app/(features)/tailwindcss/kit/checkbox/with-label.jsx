import { Checkbox, CheckboxField } from "@/ui/catalyst/checkbox";
import { Label } from "@/ui/catalyst/fieldset";

export default function Example() {
  return (
    <CheckboxField>
      <Checkbox name="allow_embedding" />
      <Label>Allow embedding</Label>
    </CheckboxField>
  );
}
