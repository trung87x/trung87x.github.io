"use client";

import { Field, Label } from "@/ui/catalyst/fieldset";
import { Textarea } from "@/ui/catalyst/textarea";
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
