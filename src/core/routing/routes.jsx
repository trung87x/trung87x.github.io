import React, { lazy } from "react";
import { Route } from "react-router-dom";

/**
 * =============================================================================
 * 📖 HƯỚNG DẪN SỬ DỤNG (README)
 * =============================================================================
 * * 1. QUY TẮC ĐẶT FILE ĐỂ TỰ ĐỘNG SINH ROUTE:
 * Hệ thống sẽ quét tất cả các file .jsx nằm trong folder 'pages'.
 * - Trang Marketing: src/features/marketing/pages/hero.jsx  => tag: "marketing"
 * - Trang UI-Kit:    src/features/ui-kit/pages/button.jsx   => tag: "ui-kit"
 * - Trang chính:     src/pages/home.jsx                     => tag: "src"
 * * 2. CÁCH ĐĂNG KÝ TRONG App.jsx:
 * import { createRouteManager } from "@/core/routing/routes";
 * * function App() {
 * const { renderByTag } = createRouteManager();
 * return (
 * <Routes>
 * <Route element={<AdminLayout />}>{renderByTag("admin")}</Route>
 * <Route element={<MainLayout />}>{renderByTag("src")}</Route>
 * {renderByTag()} // Render tất cả các trang còn lại (Default)
 * </Routes>
 * );
 * }
 * * 3. LƯU Ý:
 * - Thư tự gọi renderByTag() quyết định ưu tiên Layout.
 * - Hàm renderByTag() không tham số phải luôn nằm ở DƯỚI CÙNG của danh sách.
 * =============================================================================
 */

// 1. Quét toàn bộ hệ thống file sử dụng tính năng của Vite
const modules = import.meta.glob("/src/**/pages/**/*.jsx");

// 2. Chuyển đổi file thành cấu trúc Route dữ liệu
const routes = Object.keys(modules).map((path) => {
  const parts = path.split("/");
  const pagesIndex = parts.indexOf("pages");

  // Logic xác định TAG để nhóm Layout
  const nextPart = parts[pagesIndex + 1];
  const isFolderAfterPages = nextPart && !nextPart.includes(".");

  const folderTag = isFolderAfterPages
    ? nextPart
    : pagesIndex > 0
      ? parts[pagesIndex - 1]
      : "root";

  // Logic xử lý URL Path (xóa các phần thừa, đổi index thành /)
  let subPath = path
    .replace(/^.*\/pages/, "")
    .replace(".jsx", "")
    .replace(/\/index$/, "")
    .toLowerCase();

  const parent = pagesIndex > 0 ? parts[pagesIndex - 1] : "";
  const finalPath =
    (parent === "src" ? subPath : `/${parent}${subPath}`) || "/";

  return {
    path: finalPath,
    component: lazy(modules[path]),
    tag: folderTag,
  };
});

/**
 * Manager khởi tạo cơ chế "Trừ dần" (Exclusion)
 * Đảm bảo một route không xuất hiện 2 lần trong 2 Layout khác nhau.
 */
export const createRouteManager = () => {
  const renderedPaths = new Set();

  const renderByTag = (tag) => {
    let targetRoutes;

    if (tag) {
      // Lấy theo tag và đánh dấu đã sử dụng
      targetRoutes = routes.filter((r) => r.tag === tag);
      targetRoutes.forEach((r) => renderedPaths.add(r.path));
    } else {
      // Hốt tất cả những gì còn lại chưa được render
      targetRoutes = routes.filter((r) => !renderedPaths.has(r.path));
    }

    return targetRoutes.map((r) => (
      <Route key={r.path} path={r.path} element={<r.component />} />
    ));
  };
  return { renderByTag };
};
