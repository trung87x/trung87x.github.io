import { Checkbox } from "@/features/tailwind-v4/components/ui-kit/checkbox";
import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-center justify-between gap-4">
      <Label>Allow embedding</Label>
      <Checkbox name="allow_embedding" />
    </Headless.Field>
  );
}
