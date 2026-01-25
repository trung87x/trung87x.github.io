import { Navbar } from "@/ui/catalyst/navbar";
import { Sidebar } from "@/ui/catalyst/sidebar";
import { StackedLayout } from "@/ui/catalyst/stacked-layout";

export default function Example({ children }) {
  return (
    <StackedLayout
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
    >
      {/* Your page content */}
      {children}
    </StackedLayout>
  );
}
