import { Field, Label } from "@/components/ui-kit/fieldset";
import { Input } from "@/components/ui-kit/input";
import { useState } from "react";

export default function Example() {
  let [name, setName] = useState("");

  return (
    <Field>
      <Label>Full name</Label>
      <Input
        name="full_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Field>
  );
}
