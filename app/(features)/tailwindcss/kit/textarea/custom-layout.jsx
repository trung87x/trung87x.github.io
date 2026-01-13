import {
  Description,
  Label,
} from "@/features/tailwind-v4/components/ui-kit/fieldset";
import { Textarea } from "@/features/tailwind-v4/components/ui-kit/textarea";
import * as Headless from "@headlessui/react";

export default function Example() {
  return (
    <Headless.Field className="grid grid-cols-12 gap-6">
      <div className="col-span-5">
        <Label>Description</Label>
        <Description className="mt-1">
          This will be shown under the product title.
        </Description>
      </div>
      <div className="col-span-7">
        <Textarea name="description" rows="3" />
      </div>
    </Headless.Field>
  );
}
