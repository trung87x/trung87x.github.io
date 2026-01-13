import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";
import { Select } from "@/features/tailwind-v4/components/ui-kit/select";
import { Text } from "@/features/tailwind-v4/components/ui-kit/text";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";

export default function Example() {
  return (
    <form action="/orders" method="POST">
      {/* ... */}
      <Fieldset>
        <Legend>Shipping details</Legend>
        <Text>Without this your odds of getting your order are low.</Text>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>First name</Label>
              <Input name="first_name" />
            </Field>
            <Field>
              <Label>Last name</Label>
              <Input name="last_name" />
            </Field>
          </div>
          <Field>
            <Label>Street address</Label>
            <Input name="street_address" />
          </Field>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            <Field className="sm:col-span-2">
              <Label>Country</Label>
              <Select name="country">
                <option>Canada</option>
                <option>Mexico</option>
                <option>United States</option>
              </Select>
            </Field>
            <Field>
              <Label>Postal code</Label>
              <Input name="postal_code" />
            </Field>
          </div>
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
