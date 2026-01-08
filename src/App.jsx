import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NotFound from "@/pages/not-found";

import routes from "@/core/routing/routes";

import TailwindV4Layout from "@/features/tailwind-v4/layouts/ui-blocks-layout";
import CatalystLayout from "@/features/tailwind-v4/layouts/ui-kit-layout";
import Layout from "@/layouts/layout";

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 bg-gray-100 p-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Trang chủ
        </Link>
        <Link to="/about" className="text-blue-600 hover:underline">
          Giới thiệu
        </Link>
        <Link
          to="/tailwind-v4/ui-blocks/marketing/page-sections/hero-sections"
          className="font-medium text-indigo-600 hover:underline"
        >
          Preview Hero
        </Link>
        <Link
          to="/ui-blocks/alert"
          className="font-medium text-indigo-600 hover:underline"
        >
          Alert
        </Link>
      </nav>

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Group Tailwind V4: Tự động prefix /tailwindv4 cho tất cả con */}
          <Route path="/tailwind-v4" element={<TailwindV4Layout />}>
            {routes
              .filter((r) => r.feature === "tailwind-v4")
              .map(({ path, component: Component }) => (
                // Xóa dấu / ở đầu path con nếu có để nó nối vào cha
                <Route
                  key={path}
                  path={path.replace(/^\//, "")}
                  element={<Component />}
                />
              ))}
          </Route>

          {/* Group Catalyst */}
          <Route path="/catalyst" element={<CatalystLayout />}>
            {routes
              .filter((r) => r.feature === "catalyst")
              .map(({ path, component: Component }) => (
                <Route
                  key={path}
                  path={path.replace(/^\//, "")}
                  element={<Component />}
                />
              ))}
          </Route>

          {/* Group mặc định */}
          <Route element={<Layout />}>
            {routes
              .filter((r) => r.feature === "none")
              .map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
