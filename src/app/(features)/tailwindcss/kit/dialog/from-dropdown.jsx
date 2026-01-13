import { Button } from "@/ui/catalyst/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/ui/catalyst/dialog";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/ui/catalyst/dropdown";
import { Field, Label } from "@/ui/catalyst/fieldset";
import { Input } from "@/ui/catalyst/input";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dropdown>
        <DropdownButton outline>
          Options
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu>
          <DropdownItem onClick={() => setIsOpen(true)}>Refund</DropdownItem>
          <DropdownItem href="#" disabled>
            Download
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Refund payment</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer’s bank account 2 to 3
          business days after processing.
        </DialogDescription>
        <DialogBody>
          <Field>
            <Label>Amount</Label>
            <Input name="amount" placeholder="$0.00" />
          </Field>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
