import { Label } from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Switch } from "@/features/tailwind-v4/components/ui-kit/switch";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-center gap-4">
      <Switch name="allow_embedding" />
      <Label>Allow embedding</Label>
    </Headless.Field>
  );
}
