import { Field, Label } from "@/ui/catalyst/fieldset";
import { Input } from "@/ui/catalyst/input";
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
