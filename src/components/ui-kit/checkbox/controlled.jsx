import { Checkbox } from "@/components/ui-kit/checkbox";
import { useState } from "react";

export default function Example() {
  let [checked, setChecked] = useState(true);

  return <Checkbox checked={checked} onChange={setChecked} />;
}
