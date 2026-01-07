import { Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";

export default function Example() {
  return (
    <Field>
      <Label>Day of the week</Label>
      <Select className="max-w-40" name="day_of_the_week">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </Select>
    </Field>
  );
}
