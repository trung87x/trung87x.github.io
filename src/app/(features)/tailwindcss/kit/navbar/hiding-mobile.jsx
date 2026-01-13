import { Link } from "@/features/tailwind-v4/components/ui-kit/link";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarDivider,
} from "@/features/tailwind-v4/components/ui-kit/navbar";
import { Logo } from "./logo";

export default function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  );
}
