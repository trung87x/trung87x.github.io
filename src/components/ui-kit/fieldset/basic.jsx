import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";
import { Select } from "@/components/ui-kit/select";
import { Text } from "@/components/ui-kit/text";
import { Textarea } from "@/components/ui-kit/textarea";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      {/* ... */}
      <Fieldset>
        <Legend>Shipping details</Legend>
        <Text>Without this your odds of getting your order are low.</Text>
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
      </Fieldset>
      {/* ... */}
    </form>
  );
}
