import { Link } from "@/features/tailwind-v4/components/ui-kit/link";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
} from "@/features/tailwind-v4/components/ui-kit/navbar";
import { Logo } from "./logo";

export default function Example() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        <Logo className="size-10 sm:size-8" />
      </Link>
      <NavbarSection>
        <NavbarItem href="/" current>
          Home
        </NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  );
}
