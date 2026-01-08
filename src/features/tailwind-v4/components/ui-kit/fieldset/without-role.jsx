import {
  Description,
  Field,
  FieldGroup,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      <FieldGroup>
        <Field>
          <Label>Street address</Label>
          <Input name="street_address" />
        </Field>
        <Field>
          <Label>Country</Label>
          <Select name="country">
            <option>Canada</option>
            <option>Mexico</option>
            <option>United States</option>
          </Select>
          <Description>We currently only ship to North America.</Description>
        </Field>
        <Field>
          <Label>Delivery notes</Label>
          <Textarea name="notes" />
          <Description>
            If you have a tiger, we'd like to know about it.
          </Description>
        </Field>
      </FieldGroup>
    </form>
  );
}
