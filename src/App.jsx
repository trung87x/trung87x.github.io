import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRouteManager } from "@/core/routing/routes";

import NotFound from "@/pages/not-found";

// Layouts
import UiBlocksLayout from "@/features/tailwind-v4/layouts/ui-blocks-layout";
import UiKitLayout from "@/features/tailwind-v4/layouts/ui-kit-layout";
import Layout from "@/layouts/layout";

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const { renderByTag } = createRouteManager();
  return (
    <BrowserRouter>
      {/* Navigation - Giữ nguyên của bạn */}
      <div className="relative z-50">
        <nav className="flex gap-4 bg-gray-100 p-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Trang chủ
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            Giới thiệu
          </Link>
          <Link
            to="/tailwind-v4/ui-blocks/marketing/page-sections/hero-sections"
            className="font-medium text-indigo-600"
          >
            Preview Hero
          </Link>
          <Link
            to="/tailwind-v4/ui-kit/alert"
            className="font-medium text-indigo-600"
          >
            Alert
          </Link>
          <Link
            to="/marketing/landing/with_large_screenshot_and_testimonial"
            className="font-medium text-indigo-600"
          >
            Landing Page
          </Link>
        </nav>
      </div>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Nhóm 1: Tailwind V4 UI Blocks */}
          <Route element={<UiBlocksLayout />}>{renderByTag("ui-blocks")}</Route>

          {/* Nhóm 2: UI Kit (Catalyst) */}
          <Route element={<UiKitLayout />}>{renderByTag("ui-kit")}</Route>

          {/* Nhóm 3: Các trang chính (About, Home...) nằm trong src/pages */}
          <Route element={<Layout />}>{renderByTag("src")}</Route>

          {/* Nhóm 4: Các tính năng khác nếu có (ví dụ Blog) */}
          <Route element={<Layout />}>{renderByTag("blog")}</Route>

          {/* path="all" */}
          {renderByTag()}

          {/* Trang 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
