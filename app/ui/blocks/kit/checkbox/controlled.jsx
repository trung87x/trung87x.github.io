import { Checkbox } from "@/features/tailwind-v4/components/ui-kit/checkbox";
import { useState } from "react";

export default function Example() {
  let [checked, setChecked] = useState(true);

  return <Checkbox checked={checked} onChange={setChecked} />;
}
