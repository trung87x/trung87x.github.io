import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Switch,
  SwitchField,
} from "@/features/tailwind-v4/components/ui-kit/switch";

export default function Example() {
  return (
    <SwitchField>
      <Label>Allow embedding</Label>
      <Switch name="allow_embedding" />
    </SwitchField>
  );
}
