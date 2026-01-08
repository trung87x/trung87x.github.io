import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

import routes from "@/core/routing/autoRoutes";

import TailwindV4Layout from "@/features/tailwind-v4/layouts/ui-blocks-layout";
import CatalystLayout from "@/features/tailwind-v4/layouts/ui-kit-layout";
import MainLayout from "@/layouts/main-layout";

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
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

          <Route element={<MainLayout />}>
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
