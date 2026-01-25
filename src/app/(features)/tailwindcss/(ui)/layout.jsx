"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "./items";

// 1. CẤU TRÚC DỮ LIỆU TỔNG HỢP ĐẦY ĐỦ URL

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const [activeGroupId, setActiveGroupId] = useState("marketing");

  // Logic tự động nhận diện Group từ URL khi load trang hoặc chuyển trang
  useEffect(() => {
    const currentGroup = NAVIGATION.find((group) =>
      group.sections.some((sec) =>
        sec.items.some((item) => pathname === item.path),
      ),
    );
    if (currentGroup) {
      setActiveGroupId(currentGroup.id);
    }
  }, [pathname]);

  const activeGroup = useMemo(
    () => NAVIGATION.find((g) => g.id === activeGroupId),
    [activeGroupId],
  );

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900">
      {/* SIDEBAR */}
      <aside className="sticky top-0 h-screen w-72 overflow-y-auto border-r border-gray-200 bg-[#F9FAFB] pb-10">
        <div className="sticky top-0 z-20 bg-[#F9FAFB] px-6 py-5">
          <div className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
            Tailwind UI Lab / v4
          </div>
        </div>

        <nav className="px-3">
          {/* Main Tabs Selection */}
          <div className="mb-6 space-y-1">
            {NAVIGATION.map((group) => (
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

          {/* Render Active Sections */}
          {activeGroup && (
            <div className="animate-in fade-in duration-300">
              {activeGroup.sections.map((section, sIdx) => (
                <div key={sIdx} className="mt-4">
                  <div className="mb-1 ml-4 border-l border-gray-200 px-3 py-2 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                    {section.label}
                  </div>

                  <div className="ml-4 space-y-[2px] border-l border-gray-200">
                    {section.items.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`group relative flex items-center px-4 py-2 text-[13px] font-medium transition-all ${
                            isActive
                              ? "bg-indigo-50/30 font-semibold text-indigo-600"
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

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-white">
        <header className="sticky top-0 z-10 flex h-16 items-center border-b border-gray-100 bg-white/80 px-8 backdrop-blur-md">
          <h1 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            {activeGroup?.title} /{" "}
            <span className="text-gray-900">
              {pathname?.split("/").pop()?.replace(/-/g, " ")}
            </span>
          </h1>
        </header>
        <div className="p-8 lg:p-12">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
