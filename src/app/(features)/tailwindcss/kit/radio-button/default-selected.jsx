import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import {
  Radio,
  RadioField,
  RadioGroup,
} from "@/features/tailwind-v4/components/ui-kit/radio";

export default function Example() {
  return (
    <RadioGroup
      name="resale"
      defaultValue="permit"
      aria-label="Resale and transfers"
    >
      <RadioField>
        <Radio value="permit" />
        <Label>Allow tickets to be resold</Label>
      </RadioField>
      <RadioField>
        <Radio value="forbid" />
        <Label>Don’t allow tickets to be resold</Label>
      </RadioField>
    </RadioGroup>
  );
}
