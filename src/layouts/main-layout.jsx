import { Navbar } from "@/components/ui-kit/navbar";
import { Sidebar } from "@/components/ui-kit/sidebar";
import { StackedLayout } from "@/components/ui-kit/stacked-layout";
import { Link, Outlet } from "react-router-dom";

<nav className="flex gap-4 bg-gray-100 p-4">
  <Link to="/" className="text-blue-600 hover:underline">
    Trang chủ
  </Link>
  <Link to="/about" className="text-blue-600 hover:underline">
    Giới thiệu
  </Link>
  <Link
    to="/tailwindv4/marketing/page-sections/hero-sections"
    className="font-medium text-indigo-600 hover:underline"
  >
    Preview Hero
  </Link>
  <Link
    to="/catalyst/alert"
    className="font-medium text-indigo-600 hover:underline"
  >
    Alert
  </Link>
</nav>;

const MainLayout = () => {
  return (
    <StackedLayout
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
    >
      <Outlet />
    </StackedLayout>
  );
};

export default MainLayout;
