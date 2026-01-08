import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Example() {
  return (
    <Dropdown>
      <DropdownButton outline>
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu className="min-w-48">
        <DropdownItem href="/account">Account</DropdownItem>
        <DropdownItem href="/notifications">Notifications</DropdownItem>
        <DropdownItem href="/billing">Billing</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
