// import { Navbar } from "@/components/ui-kit/navbar";
import { Navbar, NavbarItem, NavbarSection } from "@/ui/catalyst/navbar";
import { Sidebar } from "@/ui/catalyst/sidebar";
import { SidebarLayout } from "@/ui/catalyst/sidebar-layout";

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
