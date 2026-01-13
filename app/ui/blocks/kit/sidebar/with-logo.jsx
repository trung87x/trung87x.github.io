import { Link } from "@/features/tailwind-v4/components/ui-kit/link";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarSection,
} from "@/features/tailwind-v4/components/ui-kit/sidebar";
import { Logo } from "./logo";

export default function Example() {
  return (
    <Sidebar>
      <SidebarBody>
        <div className="mb-2 flex">
          <Link href="#" aria-label="Home">
            <Logo />
          </Link>
        </div>
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
