import { Switch } from "@/features/tailwind-v4/components/ui-kit/switch";
import { useState } from "react";

export default function Example() {
  let [checked, setChecked] = useState(true);

  return <Switch checked={checked} onChange={setChecked} />;
}
