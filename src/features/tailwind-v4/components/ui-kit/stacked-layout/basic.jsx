import { Navbar } from "@/features/tailwind-v4/components/ui-kit/navbar";
import { Sidebar } from "@/features/tailwind-v4/components/ui-kit/sidebar";
import { StackedLayout } from "@/features/tailwind-v4/components/ui-kit/stacked-layout";

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
