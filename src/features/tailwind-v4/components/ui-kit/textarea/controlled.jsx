import {
  Field,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";
import { useState } from "react";

export default function Example() {
  let [name, setName] = useState("");

  return (
    <Field>
      <Label>Description</Label>
      <Textarea
        name="description"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Field>
  );
}
