import { Description, Field, Label } from "@/ui/catalyst/fieldset";
import { Input } from "@/ui/catalyst/input";

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
