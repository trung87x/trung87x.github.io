import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

import routes from "@/core/routing/autoRoutes";

import TailwindV4Layout from "@/layouts/tailwind-v4-layout";
import CatalystLayout from "@/layouts/catalyst-layout";
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
      </nav>

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<TailwindV4Layout />}>
            {routes
              .filter((r) => r.path.startsWith("/tailwindv4"))
              .map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
          </Route>

          <Route element={<CatalystLayout />}>
            {routes
              .filter((r) => r.path.startsWith("/catalyst"))
              .map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
          </Route>

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
