import {
  Checkbox,
  CheckboxField,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";

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
