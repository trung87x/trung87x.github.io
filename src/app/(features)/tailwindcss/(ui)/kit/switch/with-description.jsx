import { Description, Label } from "@/ui/catalyst/fieldset";
import { Switch, SwitchField } from "@/ui/catalyst/switch";

export default function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Description>
        Allow others to embed your event details on their own site.
      </Description>
      <Switch name="allow_embedding" />
    </SwitchField>
  );
}
