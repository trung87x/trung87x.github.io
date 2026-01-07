import { Description, Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";

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
