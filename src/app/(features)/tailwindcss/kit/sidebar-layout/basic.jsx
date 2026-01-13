// import { Navbar } from "@/components/ui-kit/navbar";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
} from "@/features/tailwind-v4/components/ui-kit/navbar";
import { Sidebar } from "@/features/tailwind-v4/components/ui-kit/sidebar";
import { SidebarLayout } from "@/features/tailwind-v4/components/ui-kit/sidebar-layout";

export default function Example({ children }) {
  return (
    <SidebarLayout
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
      // navbar={<Navbar>{/* Your navbar content */}</Navbar>}
      navbar={
        <Navbar>
          <NavbarSection>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/events">Events</NavbarItem>
            <NavbarItem href="/orders">Orders</NavbarItem>
          </NavbarSection>
        </Navbar>
      }
    >
      {/* Your page content */}
      {children}
    </SidebarLayout>
  );
}
