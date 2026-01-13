import { Avatar } from "@/features/tailwind-v4/components/ui-kit/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/features/tailwind-v4/components/ui-kit/navbar";
import {
  ChevronDownIcon,
  Cog8ToothIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <Navbar>
      <Dropdown>
        <DropdownButton as={NavbarItem} aria-label="Account menu">
          <Avatar src="/src/assets/images/tailwind-logo.svg" />
          <NavbarLabel>Tailwind Labs</NavbarLabel>
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu className="min-w-64" anchor="bottom start">
          <DropdownItem href="/teams/1/settings">
            <Cog8ToothIcon />
            <DropdownLabel>Settings</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/teams/1">
            <Avatar slot="icon" src="/src/assets/images/tailwind-logo.svg" />
            <DropdownLabel>Tailwind Labs</DropdownLabel>
          </DropdownItem>
          <DropdownItem href="/teams/2">
            <Avatar
              slot="icon"
              initials="WC"
              className="bg-purple-500 text-white"
            />
            <DropdownLabel>Workcation</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/teams/create">
            <PlusIcon />
            <DropdownLabel>New team&hellip;</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem href="/search" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>
        <NavbarItem href="/inbox" aria-label="Inbox">
          <InboxIcon />
        </NavbarItem>
      </NavbarSection>
    </Navbar>
  );
}
