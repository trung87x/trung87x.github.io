import { Label } from "@/components/ui-kit/fieldset";
import { Switch, SwitchField } from "@/components/ui-kit/switch";

export default function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Switch name="allow_embedding" />
    </SwitchField>
  );
}
