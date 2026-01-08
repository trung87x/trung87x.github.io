import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
} from "@/features/tailwind-v4/components/ui-kit/navbar";
import { Link } from "@/features/tailwind-v4/components/ui-kit/link";
import { Logo } from "./logo";

export default function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarDivider />
      <NavbarSection>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  );
}
