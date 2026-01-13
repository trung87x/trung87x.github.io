import {
  Description,
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Input } from "@/features/tailwind-v4/components/ui-kit/input";

export default function Example() {
  return (
    <Field>
      <Label>Product name</Label>
      <Description>
        Use the name you'd like people to see in their cart.
      </Description>
      <Input name="product_name" />
    </Field>
  );
}
