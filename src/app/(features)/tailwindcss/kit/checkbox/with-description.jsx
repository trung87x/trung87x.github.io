import { Checkbox, CheckboxField } from "@/ui/catalyst/checkbox";
import { Description, Label } from "@/ui/catalyst/fieldset";

export default function Example() {
  return (
    <CheckboxField>
      <Checkbox name="allow_embedding" />
      <Label>Allow embedding</Label>
      <Description>
        Allow others to embed your event details on their own site.
      </Description>
    </CheckboxField>
  );
}
