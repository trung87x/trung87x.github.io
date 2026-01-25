import { Label } from "@/ui/catalyst/fieldset";
import { Input } from "@/ui/catalyst/input";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="flex items-center justify-center gap-6">
      <Label>Full name</Label>
      <Input name="full_name" className="max-w-48" />
    </Headless.Field>
  );
}
