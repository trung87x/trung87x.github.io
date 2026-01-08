import { Field, Label } from "@/components/ui-kit/fieldset";
import { Select } from "@/components/ui-kit/select";
import { useState } from "react";

export default function Example() {
  let [status, setStatus] = useState("active");

  return (
    <Field>
      <Label>Project status</Label>
      <Select
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  );
}
