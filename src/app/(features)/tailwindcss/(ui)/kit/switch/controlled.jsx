"use client";

import { Switch } from "@/ui/catalyst/switch";
import { useState } from "react";

export default function Example() {
  let [checked, setChecked] = useState(true);

  return <Switch checked={checked} onChange={setChecked} />;
}
