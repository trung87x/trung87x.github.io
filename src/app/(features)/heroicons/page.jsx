"use client";

import React, { useState } from "react";
import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";

export default function Example() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOutline, setIsOutline] = useState(true);
  // Trạng thái để hiển thị thông báo đã copy
  const [copiedName, setCopiedName] = useState("");

  const currentIcons = isOutline ? OutlineIcons : SolidIcons;
  const allIcons = Object.entries(currentIcons).map(([name, Icon]) => ({
    name,
    Icon,
  }));

  const filteredIcons = allIcons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Hàm copy an toàn và có phản hồi
  const handleCopy = async (name) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(name);
        setCopiedName(name); // Lưu tên icon vừa copy để hiện thông báo

        // Tự động ẩn thông báo sau 2 giây
        setTimeout(() => setCopiedName(""), 2000);
      } else {
        throw new Error("Clipboard API không khả dụng");
      }
    } catch (err) {
      console.error("Lỗi copy:", err);
      alert(
        "Trình duyệt của bạn chặn quyền copy. Hãy thử mở trang bằng HTTPS hoặc localhost.",
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Toast thông báo khi copy thành công */}
        {copiedName && (
          <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 animate-bounce rounded-full bg-black px-6 py-3 text-white shadow-2xl">
            Đã copy:{" "}
            <span className="font-bold text-yellow-400">{copiedName}</span>
          </div>
        )}

        <h1 className="mb-4 text-3xl font-extrabold">Heroicons Search</h1>

        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Tìm kiếm icon..."
            className="flex-1 rounded-lg border p-3 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex shrink-0 rounded-lg bg-slate-200 p-1">
            <button
              onClick={() => setIsOutline(false)}
              className={`rounded-md px-6 py-2 transition ${!isOutline ? "bg-white font-bold shadow-sm" : ""}`}
            >
              Solid
            </button>
            <button
              onClick={() => setIsOutline(true)}
              className={`rounded-md px-6 py-2 transition ${isOutline ? "bg-white font-bold shadow-sm" : ""}`}
            >
              Outline
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredIcons.map(({ name, Icon }) => (
            <div
              key={name}
              onClick={() => handleCopy(name)}
              className="group flex cursor-pointer flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:scale-105 hover:border-indigo-500 active:scale-95"
            >
              <Icon
                className={`${isOutline ? "size-8 stroke-[1.5]" : "size-8"} mb-3 text-slate-700 group-hover:text-indigo-600`}
              />
              <span className="text-center font-mono text-[10px] break-all text-slate-400">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
