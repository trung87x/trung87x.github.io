import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/components/ui-kit/checkbox";
import {
  Description,
  Fieldset,
  Label,
  Legend,
} from "@/components/ui-kit/fieldset";
import { Text } from "@/components/ui-kit/text";

export default function Example() {
  return (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <CheckboxGroup>
        <CheckboxField>
          <Checkbox name="discoverability" value="show_on_events_page" />
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
        </CheckboxField>
        <CheckboxField disabled>
          <Checkbox name="discoverability" value="allow_embedding" />
          <Label>Allow embedding</Label>
          <Description>
            Allow others to embed your event details on their own site.
          </Description>
        </CheckboxField>
      </CheckboxGroup>
    </Fieldset>
  );
}
