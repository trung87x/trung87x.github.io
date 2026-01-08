import { lazy } from "react";

const modules = import.meta.glob("/src/**/pages/**/*.jsx");

// Tạo ra mảng routes ngay lập tức thay vì để trong function
const routes = Object.keys(modules).map((path) => {
  let featureName = "none";
  if (path.includes("/features/")) {
    featureName = path.split("/features/")[1].split("/")[0];
  }

  let routePath = path
    .replace(/^.*\/pages/, "")
    .replace(".jsx", "")
    .toLowerCase();

  routePath = routePath.replace(/\/index$/, "") || "/";

  return {
    path: routePath,
    component: lazy(modules[path]),
    feature: featureName,
  };
});

export default routes; // Export mảng đã xử lý xong
