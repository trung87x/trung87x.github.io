import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Switch,
  SwitchField,
} from "@/features/tailwind-v4/components/ui-kit/switch";

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
