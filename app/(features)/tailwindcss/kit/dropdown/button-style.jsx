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
      <DropdownButton color="cyan">
        Options
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="#">View</DropdownItem>
        <DropdownItem href="#">Edit</DropdownItem>
        <DropdownItem href="#">Export as CSV&hellip;</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
