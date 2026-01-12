import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/app/ui/catalyst/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/app/ui/catalyst/sidebar";
import { StackedLayout } from "@/app/ui/catalyst/stacked-layout";
import Link from "next/link";

export default function MarketingLayout({ children }) {
  return (
    <StackedLayout
      navbar={
        /* 1. Phải truyền className cho cả Navbar (như hình 1 của bạn đang thiếu) */
        <Navbar className="text-white">
          <NavbarSection className="">
            {/* 2. Dùng href trực tiếp, NavbarItem của Catalyst sẽ tự xử lý Link */}
            <NavbarItem href="/" className="" current={false}>
              Trang chủ
            </NavbarItem>
            <NavbarItem href="/projects" className="" current={false}>
              Dự án
            </NavbarItem>
            <NavbarItem href="/about" className="" current={false}>
              Giới thiệu
            </NavbarItem>
          </NavbarSection>
          <NavbarSpacer className="" />
          <NavbarSection className="">
            <NavbarItem href="/contact" className="" current={false}>
              Liên hệ
            </NavbarItem>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar className="">
          <SidebarHeader className="">
            <span className="font-display text-avocado-500 font-bold">
              Menu
            </span>
          </SidebarHeader>
          <SidebarBody className="">
            <SidebarSection className="">
              <SidebarItem href="/" className="" current={false}>
                Trang chủ
              </SidebarItem>
              <SidebarItem href="/projects" className="" current={false}>
                Dự án
              </SidebarItem>
              <SidebarItem href="/about" className="" current={false}>
                Giới thiệu
              </SidebarItem>
              <SidebarItem href="/contact" className="" current={false}>
                Liên hệ
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </StackedLayout>
  );
}
