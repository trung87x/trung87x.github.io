import { lazy } from "react";

const modules = import.meta.glob("/src/**/pages/**/*.jsx");

const routes = Object.keys(modules).map((path) => {
  const parts = path.split("/");
  const pagesIndex = parts.indexOf("pages");

  const folderTag = pagesIndex > 0 ? parts[pagesIndex - 1] : "root";

  let subPath = path
    .replace(/^.*\/pages/, "")
    .replace(".jsx", "")
    .replace(/\/index$/, "")
    .toLowerCase();

  const finalPath =
    (folderTag === "src" ? subPath : `/${folderTag}${subPath}`) || "/";

  return {
    path: finalPath,
    component: lazy(modules[path]),
    tag: folderTag,
  };
});

/* VÍ DỤ KẾT QUẢ (MAPPING):
  1. /src/pages/index.jsx 
     => { path: "/", tag: "src", component: ... }

  2. /src/pages/about.jsx 
     => { path: "/about", tag: "src", component: ... }

  3. /src/features/blog/pages/post-1.jsx 
     => { path: "/blog/post-1", tag: "blog", component: ... }

  4. /src/features/tailwind-v4/pages/ui-blocks/marketing/hero.jsx 
     => { path: "/tailwind-v4/ui-blocks/marketing/hero", tag: "tailwind-v4", component: ... }
*/

export default routes;
