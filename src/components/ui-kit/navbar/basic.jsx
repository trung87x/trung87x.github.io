import { Navbar, NavbarItem, NavbarSection } from "@/components/ui-kit/navbar";

export default function Example() {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  );
}
