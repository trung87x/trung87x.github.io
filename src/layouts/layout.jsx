import { Navbar } from "@/components/ui-kit/navbar";
import { Sidebar } from "@/components/ui-kit/sidebar";
import { StackedLayout } from "@/components/ui-kit/stacked-layout";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <StackedLayout
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
    >
      <Outlet />
    </StackedLayout>
  );
};

export default Layout;
