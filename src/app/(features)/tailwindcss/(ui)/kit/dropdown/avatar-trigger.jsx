import { AvatarButton } from "@/ui/catalyst/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
} from "@/ui/catalyst/dropdown";

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
