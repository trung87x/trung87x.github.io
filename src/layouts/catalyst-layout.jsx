import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
// Đảm bảo bạn đã cài @heroicons/react
import {
  SparklesIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const TailwindV4Layout = () => {
  const { pathname } = useLocation();

  // DỮ LIỆU ĐÃ ĐỒNG NHẤT
  const navigation = [
    {
      id: "marketing",
      title: "Marketing",
      icon: <SparklesIcon className="h-4 w-4" />,
      sections: [
        {
          label: "PAGE SECTIONS",
          items: [
            {
              name: "Hero Sections",
              path: "/tailwindv4/marketing/page-sections/hero-sections",
            },
            {
              name: "Feature Sections",
              path: "/tailwindv4/marketing/page-sections/feature-sections",
            },
            {
              name: "CTA Sections",
              path: "/tailwindv4/marketing/page-sections/cta-sections",
            },
            {
              name: "Bento Grids",
              path: "/tailwindv4/marketing/page-sections/bento-grids",
            },
            {
              name: "Pricing Sections",
              path: "/tailwindv4/marketing/page-sections/pricing-sections",
            },
            {
              name: "Header Sections",
              path: "/tailwindv4/marketing/page-sections/header-sections",
            },
            {
              name: "Newsletter Sections",
              path: "/tailwindv4/marketing/page-sections/newsletter-sections",
            },
            {
              name: "Stats",
              path: "/tailwindv4/marketing/page-sections/stats",
            },
            {
              name: "Testimonials",
              path: "/tailwindv4/marketing/page-sections/testimonials",
            },
            {
              name: "Blog Sections",
              path: "/tailwindv4/marketing/page-sections/blog-sections",
            },
            {
              name: "Contact Sections",
              path: "/tailwindv4/marketing/page-sections/contact-sections",
            },
            {
              name: "Team Sections",
              path: "/tailwindv4/marketing/page-sections/team-sections",
            },
            {
              name: "Content Sections",
              path: "/tailwindv4/marketing/page-sections/content-sections",
            },
            {
              name: "Logo Clouds",
              path: "/tailwindv4/marketing/page-sections/logo-clouds",
            },
            { name: "FAQs", path: "/tailwindv4/marketing/page-sections/faqs" },
            {
              name: "Footers",
              path: "/tailwindv4/marketing/page-sections/footers",
            },
          ],
        },
        {
          label: "ELEMENTS",
          items: [
            { name: "Headers", path: "/tailwindv4/marketing/elements/headers" },
            {
              name: "Flyout Menus",
              path: "/tailwindv4/marketing/elements/flyout-menus",
            },
            { name: "Banners", path: "/tailwindv4/marketing/elements/banners" },
          ],
        },
        ,
        {
          label: "FEEDBACK",
          items: [
            {
              name: "Headers",
              path: "/tailwindv4/marketing/feedback/404-pages",
            },
          ],
        },
        ,
        {
          label: "PAGE EXAMPLES",
          items: [
            {
              name: "Landing Pages",
              path: "/tailwindv4/marketing/page-examples/landing-pages",
            },
            {
              name: "Pricing Pages",
              path: "/tailwindv4/marketing/page-examples/pricing-pages",
            },
            {
              name: "About Pages",
              path: "/tailwindv4/marketing/page-examples/about-pages",
            },
          ],
        },
      ],
    },
    {
      id: "application-ui",
      title: "Application UI",
      icon: <ComputerDesktopIcon className="h-4 w-4" />,
      sections: [
        {
          label: "APPLICATION SHELLS",
          items: [
            {
              name: "Stacked Layouts",
              path: "/tailwindv4/application-ui/application-shells/stacked-layouts",
            },
            {
              name: "Sidebar Layouts",
              path: "/tailwindv4/application-ui/application-shells/sidebar-layouts",
            },
            {
              name: "Multi-Column Layouts",
              path: "/tailwindv4/application-ui/application-shells/multi-column-layouts",
            },
          ],
        },
        {
          label: "HEADINGS",
          items: [
            {
              name: "Page Headings",
              path: "/tailwindv4/application-ui/headings/page-headings",
            },
            {
              name: "Card Headings",
              path: "/tailwindv4/application-ui/headings/card-headings",
            },
            {
              name: "Section Headings",
              path: "/tailwindv4/application-ui/headings/section-headings",
            },
          ],
        },
        {
          label: "DATA DISPLAY",
          items: [
            {
              name: "Description Lists",
              path: "/tailwindv4/application-ui/data-display/description-lists",
            },
            {
              name: "Stats",
              path: "/tailwindv4/application-ui/data-display/stats",
            },
            {
              name: "Calendars",
              path: "/tailwindv4/application-ui/data-display/calendars",
            },
          ],
        },
        {
          label: "LISTS",
          items: [
            {
              name: "Stacked Lists",
              path: "/tailwindv4/application-ui/lists/stacked-lists",
            },
            { name: "Tables", path: "/tailwindv4/application-ui/lists/tables" },
            {
              name: "Grid Lists",
              path: "/tailwindv4/application-ui/lists/grid-lists",
            },
            { name: "Feeds", path: "/tailwindv4/application-ui/lists/feeds" },
          ],
        },
        {
          label: "FORMS",
          items: [
            {
              name: "Form Layouts",
              path: "/tailwindv4/application-ui/forms/form-layouts",
            },
            {
              name: "Input Groups",
              path: "/tailwindv4/application-ui/forms/input-groups",
            },
            {
              name: "Select Menus",
              path: "/tailwindv4/application-ui/forms/select-menus",
            },
            {
              name: "Sign-in and Registration",
              path: "/tailwindv4/application-ui/forms/sign-in-and-registration",
            },
            {
              name: "Textareas",
              path: "/tailwindv4/application-ui/forms/textareas",
            },
            {
              name: "Radio Groups",
              path: "/tailwindv4/application-ui/forms/radio-groups",
            },
            {
              name: "Checkboxes",
              path: "/tailwindv4/application-ui/forms/checkboxes",
            },
            {
              name: "Toggles",
              path: "/tailwindv4/application-ui/forms/toggles",
            },
            {
              name: "Action Panels",
              path: "/tailwindv4/application-ui/forms/action-panels",
            },
            {
              name: "Comboboxes",
              path: "/tailwindv4/application-ui/forms/comboboxes",
            },
          ],
        },
        {
          label: "FEEDBACK",
          items: [
            {
              name: "Alerts",
              path: "/tailwindv4/application-ui/feedback/alerts",
            },
            {
              name: "Empty States",
              path: "/tailwindv4/application-ui/feedback/empty-states",
            },
          ],
        },
        {
          label: "NAVIGATION",
          items: [
            {
              name: "Navbars",
              path: "/tailwindv4/application-ui/navigation/navbars",
            },
            {
              name: "Pagination",
              path: "/tailwindv4/application-ui/navigation/pagination",
            },
            {
              name: "Tabs",
              path: "/tailwindv4/application-ui/navigation/tabs",
            },
            {
              name: "Vertical Navigation",
              path: "/tailwindv4/application-ui/navigation/vertical-navigation",
            },
            {
              name: "Sidebar Navigation",
              path: "/tailwindv4/application-ui/navigation/sidebar-navigation",
            },
            {
              name: "Breadcrumbs",
              path: "/tailwindv4/application-ui/navigation/breadcrumbs",
            },
            {
              name: "Progress Bars",
              path: "/tailwindv4/application-ui/navigation/progress-bars",
            },
            {
              name: "Command Palettes",
              path: "/tailwindv4/application-ui/navigation/command-palettes",
            },
          ],
        },
        {
          label: "OVERLAYS",
          items: [
            {
              name: "Modal Dialogs",
              path: "/tailwindv4/application-ui/overlays/modal-dialogs",
            },
            {
              name: "Drawers",
              path: "/tailwindv4/application-ui/overlays/drawers",
            },
            {
              name: "Notifications",
              path: "/tailwindv4/application-ui/overlays/notifications",
            },
          ],
        },
        {
          label: "ELEMENTS",
          items: [
            {
              name: "Avatars",
              path: "/tailwindv4/application-ui/elements/avatars",
            },
            {
              name: "Badges",
              path: "/tailwindv4/application-ui/elements/badges",
            },
            {
              name: "Dropdowns",
              path: "/tailwindv4/application-ui/elements/dropdowns",
            },
            {
              name: "Buttons",
              path: "/tailwindv4/application-ui/elements/buttons",
            },
            {
              name: "Button Groups",
              path: "/tailwindv4/application-ui/elements/button-groups",
            },
          ],
        },
        {
          label: "LAYOUT",
          items: [
            {
              name: "Containers",
              path: "/tailwindv4/application-ui/layout/containers",
            },
            { name: "Cards", path: "/tailwindv4/application-ui/layout/cards" },
            {
              name: "List containers",
              path: "/tailwindv4/application-ui/layout/list-containers",
            },
            {
              name: "Media Objects",
              path: "/tailwindv4/application-ui/layout/media-objects",
            },
            {
              name: "Dividers",
              path: "/tailwindv4/application-ui/layout/dividers",
            },
          ],
        },
        {
          label: "PAGE EXAMPLES",
          items: [
            {
              name: "Home Screens",
              path: "/tailwindv4/application-ui/page-examples/home-screens",
            },
            {
              name: "Detail Screens",
              path: "/tailwindv4/application-ui/page-examples/detail-screens",
            },
            {
              name: "Settings Screens",
              path: "/tailwindv4/application-ui/page-examples/settings-screens",
            },
          ],
        },
      ],
    },
    {
      id: "ecommerce",
      title: "Ecommerce",
      icon: <ShoppingBagIcon className="h-4 w-4" />,
      sections: [
        {
          label: "COMPONENTS",
          items: [
            {
              name: "Product Overviews",
              path: "/tailwindv4/ecommerce/components/product-overviews",
            },
            {
              name: "Product Lists",
              path: "/tailwindv4/ecommerce/components/product-lists",
            },
            {
              name: "Category Previews",
              path: "/tailwindv4/ecommerce/components/category-previews",
            },
            {
              name: "Shopping Carts",
              path: "/tailwindv4/ecommerce/components/shopping-carts",
            },
            {
              name: "Category Filters",
              path: "/tailwindv4/ecommerce/components/category-filters",
            },
            {
              name: "Product Quickviews",
              path: "/tailwindv4/ecommerce/components/product-quickviews",
            },
            {
              name: "Product Features",
              path: "/tailwindv4/ecommerce/components/product-features",
            },
            {
              name: "Store Navigation",
              path: "/tailwindv4/ecommerce/components/store-navigation",
            },
            {
              name: "Promo Sections",
              path: "/tailwindv4/ecommerce/components/promo-sections",
            },
            {
              name: "Checkout Forms",
              path: "/tailwindv4/ecommerce/components/checkout-forms",
            },
            {
              name: "Reviews",
              path: "/tailwindv4/ecommerce/components/reviews",
            },
            {
              name: "Order Summaries",
              path: "/tailwindv4/ecommerce/components/order-summaries",
            },
            {
              name: "Order History",
              path: "/tailwindv4/ecommerce/components/order-history",
            },
            {
              name: "Incentives",
              path: "/tailwindv4/ecommerce/components/incentives",
            },
          ],
        },
        {
          label: "PAGE EXAMPLES",
          items: [
            {
              name: "Storefront Pages",
              path: "/tailwindv4/ecommerce/page-examples/storefront-pages",
            },
            {
              name: "Product Pages",
              path: "/tailwindv4/ecommerce/page-examples/product-pages",
            },
            {
              name: "Category Pages",
              path: "/tailwindv4/ecommerce/page-examples/category-pages",
            },
            {
              name: "Shopping Cart Pages",
              path: "/tailwindv4/ecommerce/page-examples/shopping-cart-pages",
            },
            {
              name: "Checkout Pages",
              path: "/tailwindv4/ecommerce/page-examples/checkout-pages",
            },
            {
              name: "Order Detail Pages",
              path: "/tailwindv4/ecommerce/page-examples/order-detail-pages",
            },
            {
              name: "Order History Pages",
              path: "/tailwindv4/ecommerce/page-examples/order-history-pages",
            },
          ],
        },
      ],
    },
  ];

  // STATE ĐỂ THEO DÕI MENU ĐANG MỞ
  const [activeGroupId, setActiveGroupId] = useState("marketing");

  // Tự động mở đúng menu dựa trên URL khi load trang
  useEffect(() => {
    const currentGroup = navigation.find((group) =>
      group.sections.some((sec) =>
        sec.items.some((item) => pathname.startsWith(item.path)),
      ),
    );
    if (currentGroup) setActiveGroupId(currentGroup.id);
  }, [pathname]);

  const activeGroup = navigation.find((g) => g.id === activeGroupId);

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900">
      {/* --- SIDEBAR --- */}
      <aside className="sticky top-0 h-screen w-72 overflow-y-auto border-r border-gray-200 bg-[#F9FAFB] pb-10">
        <div className="sticky top-0 z-20 bg-[#F9FAFB] px-6 py-5">
          <div className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
            Component Lab / v4
          </div>
        </div>

        <nav className="px-3">
          {/* 1. HIỂN THỊ CÁC NHÓM CHA (Marketing, App UI...) */}
          <div className="mb-6 space-y-1">
            {navigation.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveGroupId(group.id)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-all ${
                  activeGroupId === group.id
                    ? "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200"
                    : "text-gray-500 hover:bg-gray-200/50 hover:text-gray-900"
                }`}
              >
                {group.icon}
                <span>{group.title}</span>
              </button>
            ))}
          </div>

          <hr className="mx-2 my-6 border-gray-200" />

          {/* 2. HIỂN THỊ NỘI DUNG CON CỦA NHÓM ĐANG CHỌN */}
          {activeGroup && (
            <div className="animate-in fade-in duration-500">
              {activeGroup.sections.map((section, sIdx) => (
                <div key={sIdx} className="mt-4">
                  {section.label && (
                    <div className="mb-1 ml-4 border-l border-gray-200 px-3 py-2 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                      {section.label}
                    </div>
                  )}

                  <div className="ml-4 space-y-[2px] border-l border-gray-200">
                    {section.items.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`group relative flex items-center px-4 py-2 text-[13px] font-medium transition-all ${
                            isActive
                              ? "font-semibold text-indigo-600"
                              : "text-gray-600 hover:bg-gray-100/50 hover:text-gray-900"
                          }`}
                        >
                          {isActive && (
                            <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-indigo-600" />
                          )}
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 bg-white">
        <header className="sticky top-0 z-10 flex h-16 items-center border-b border-gray-100 bg-white/80 px-8 backdrop-blur-md">
          <h1 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            {activeGroup?.title} /{" "}
            {pathname.split("/").pop()?.replace(/-/g, " ")}
          </h1>
        </header>
        <div className="p-8 lg:p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TailwindV4Layout;
