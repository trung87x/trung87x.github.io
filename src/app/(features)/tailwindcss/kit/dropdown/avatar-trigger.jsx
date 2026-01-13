import { AvatarButton } from "@/features/tailwind-v4/components/ui-kit/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
} from "@/features/tailwind-v4/components/ui-kit/dropdown";

export default function Example({ currentUser, signOut }) {
  return (
    <Dropdown>
      <DropdownButton
        className="size-8"
        as={AvatarButton}
        src={currentUser.avatarUrl}
        aria-label="Account options"
      />
      <DropdownMenu placement="bottom">
        <DropdownItem href="/profile">My profile</DropdownItem>
        <DropdownItem href="/settings">Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem onClick={() => signOut()}>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
