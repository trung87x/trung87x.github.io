import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
} from "@/ui/catalyst/sidebar";

export default function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/">Home</SidebarItem>
          <SidebarItem href="/events">Events</SidebarItem>
          <SidebarItem href="/orders">Orders</SidebarItem>
          <SidebarItem href="/broadcasts">Broadcasts</SidebarItem>
          <SidebarItem href="/settings">Settings</SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}
