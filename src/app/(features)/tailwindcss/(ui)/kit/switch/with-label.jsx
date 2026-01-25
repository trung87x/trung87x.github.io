import { Label } from "@/ui/catalyst/fieldset";
import { Switch, SwitchField } from "@/ui/catalyst/switch";

export default function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Switch name="allow_embedding" />
    </SwitchField>
  );
}
