import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
// Đảm bảo bạn đã cài @heroicons/react
import {
  SparklesIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const Layout = () => {
  const { pathname } = useLocation();

  // DỮ LIỆU ĐÃ ĐỒNG NHẤT
  const navigation = [
    {
      id: "ui-kit",
      title: "UI Kit",
      icon: <SparklesIcon className="h-4 w-4" />,
      sections: [
        {
          label: "Layouts",
          items: [
            {
              name: "Sidebar layout",
              path: "/tailwind-v4/ui-kit/sidebar-layout",
            },
            {
              name: "Stacked layout",
              path: "/tailwind-v4/ui-kit/stacked-layout",
            },
          ],
        },
        {
          label: "Components",
          items: [
            {
              name: "Alert",
              path: "/tailwind-v4/ui-kit/alert",
            },
            {
              name: "Avatar",
              path: "/tailwind-v4/ui-kit/avatar",
            },
            {
              name: "Badge",
              path: "/tailwind-v4/ui-kit/badge",
            },
            {
              name: "Button",
              path: "/tailwind-v4/ui-kit/button",
            },
            {
              name: "Checkbox",
              path: "/tailwind-v4/ui-kit/checkbox",
            },
            {
              name: "Description list",
              path: "/tailwind-v4/ui-kit/description-list",
            },
            {
              name: "Dialog",
              path: "/tailwind-v4/ui-kit/dialog",
            },
            {
              name: "Divider",
              path: "/tailwind-v4/ui-kit/divider",
            },
            {
              name: "Dropdown",
              path: "/tailwind-v4/ui-kit/dropdown",
            },
            {
              name: "Fieldset",
              path: "/tailwind-v4/ui-kit/fieldset",
            },
            {
              name: "Heading",
              path: "/tailwind-v4/ui-kit/heading",
            },
            {
              name: "Input",
              path: "/tailwind-v4/ui-kit/input",
            },
            {
              name: "Listbox",
              path: "/tailwind-v4/ui-kit/listbox",
            },
            {
              name: "Navbar",
              path: "/tailwind-v4/ui-kit/navbar",
            },
            {
              name: "Pagination",
              path: "/tailwind-v4/ui-kit/pagination",
            },
            {
              name: "Radio Button",
              path: "/tailwind-v4/ui-kit/radio-button",
            },
            {
              name: "Select",
              path: "/tailwind-v4/ui-kit/select",
            },
            {
              name: "Sidebar",
              path: "/tailwind-v4/ui-kit/sidebar",
            },
            {
              name: "Switch",
              path: "/tailwind-v4/ui-kit/switch",
            },
            {
              name: "Table",
              path: "/tailwind-v4/ui-kit/table",
            },
            {
              name: "Text",
              path: "/tailwind-v4/ui-kit/text",
            },
            {
              name: "Textarea",
              path: "/tailwind-v4/ui-kit/textarea",
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

export default Layout;
