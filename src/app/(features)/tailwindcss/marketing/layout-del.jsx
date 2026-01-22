"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLayout = ({ children }) => {
  const pathname = usePathname();

  // Quản lý đóng mở các menu group
  const [openMenus, setOpenMenus] = useState({
    marketing: true,
    elements: true,
    feedback: true,
    pageExamples: true,
    pageSections: true,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Cấu trúc dữ liệu dựa trên hình ảnh thư mục của bạn
  const marketingData = [
    {
      id: "elements",
      name: "Elements",
      items: [
        { id: "banners", name: "Banners" },
        { id: "flyout-menus", name: "Flyout Menus" },
        { id: "headers", name: "Headers" },
      ],
    },
    {
      id: "feedback",
      name: "Feedback",
      items: [{ id: "404-pages", name: "404 Pages" }],
    },
    {
      id: "page-examples",
      name: "Page Examples",
      items: [
        { id: "about-pages", name: "About Pages" },
        { id: "landing-pages", name: "Landing Pages" },
        { id: "pricing-pages", name: "Pricing Pages" },
      ],
    },
    {
      id: "page-sections",
      name: "Page Sections",
      items: [
        { id: "bento-grids", name: "Bento Grids" },
        { id: "blog-sections", name: "Blog Sections" },
        { id: "hero-sections", name: "Hero Sections" },
        { id: "content-sections", name: "Content Sections" },
        { id: "cta-sections", name: "CTA Sections" },
        { id: "faqs", name: "FAQs" },
        { id: "feature-sections", name: "Feature Sections" },
        { id: "footers", name: "Footers" },
        { id: "header-sections", name: "Header Sections" },
        { id: "hero-sections", name: "Hero Sections" },
        { id: "logo-clouds", name: "Logo Clouds" },
        { id: "newsletter-sections", name: "Newsletter Sections" },
        { id: "pricing-sections", name: "Pricing Sections" },
        { id: "stats-sections", name: "Stats Sections" },
        { id: "team-sections", name: "Team Sections" },
        { id: "testimonials", name: "Testimonials" },
      ],
    },
  ];

  const baseMarketingDir = "/tailwindcss/marketing";

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="border-b border-gray-100 p-4 text-xl font-bold tracking-tight text-gray-800">
          <Link href="/">Tailwind UI</Link>
        </div>

        <nav className="flex-1 space-y-1 p-2 text-sm">
          {["Application UI", "Ecommerce"].map((item) => (
            <div
              key={item}
              className="flex cursor-pointer items-center rounded p-2 text-gray-600 hover:bg-gray-50"
            >
              <span className="mr-2">›</span> {item}
            </div>
          ))}

          {/* Marketing Parent Menu */}
          <div>
            <div
              className="flex cursor-pointer items-center rounded p-2 font-medium text-green-700 hover:bg-green-50"
              onClick={() => toggleMenu("marketing")}
            >
              <span
                className={`mr-2 transform transition-transform ${openMenus.marketing ? "rotate-90" : ""}`}
              >
                ›
              </span>
              Marketing
            </div>

            {openMenus.marketing && (
              <div className="ml-4 space-y-1 border-l border-gray-100">
                {/* Render các Group: Elements, Feedback, Page Examples... */}
                {marketingData.map((group) => (
                  <div key={group.id}>
                    <div
                      className="flex cursor-pointer items-center p-2 pl-4 font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600"
                      onClick={() => toggleMenu(group.id)}
                    >
                      <span
                        className={`mr-2 transform transition-transform ${openMenus[group.id] ? "rotate-90" : ""}`}
                      >
                        ›
                      </span>
                      {group.name}
                    </div>

                    {openMenus[group.id] && (
                      <div className="ml-4 space-y-0.5">
                        {group.items.map((item) => {
                          const fullPath = `${baseMarketingDir}/${group.id}/${item.id}`;
                          const isActive = pathname === fullPath;

                          return (
                            <Link
                              key={item.id}
                              href={fullPath}
                              className={`block cursor-pointer rounded-l-md p-2 pl-4 transition-colors ${
                                isActive
                                  ? "border-l-2 border-green-600 bg-green-50 font-semibold text-green-600"
                                  : "text-gray-500 hover:bg-green-50 hover:text-green-600"
                              }`}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">{children}</main>
    </div>
  );
};

export default SidebarLayout;
