import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/features/tailwind-v4/components/ui-kit/checkbox";
import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";

export default function Example() {
  return (
    <CheckboxGroup>
      <CheckboxField>
        <Checkbox name="show_on_events_page" defaultChecked />
        <Label>Show on events page</Label>
        <Description>Make this event visible on your profile.</Description>
      </CheckboxField>
      <CheckboxField>
        <Checkbox name="allow_embedding" />
        <Label>Allow embedding</Label>
        <Description>
          Allow others to embed your event details on their own site.
        </Description>
      </CheckboxField>
    </CheckboxGroup>
  );
}
