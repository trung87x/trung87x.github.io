"use client";

import { Checkbox } from "@/ui/catalyst/checkbox";
import { useState } from "react";

export default function Example() {
  let [checked, setChecked] = useState(true);

  return <Checkbox checked={checked} onChange={setChecked} />;
}
