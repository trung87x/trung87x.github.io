import { lazy } from "react";

const modules = import.meta.glob("/src/**/pages/**/*.jsx");

const routes = Object.keys(modules).map((path) => {
  const parts = path.split("/");
  const pagesIndex = parts.indexOf("pages");

  // 1. Lấy phần tử ngay sau "pages"
  const nextPart = parts[pagesIndex + 1];
  // Kiểm tra xem đó là folder hay là file (file thì có dấu chấm .jsx)
  const isFolderAfterPages = nextPart && !nextPart.includes(".");

  /**
   * LOGIC TAG:
   * - Nếu có folder sau "pages" (như ui-blocks) -> lấy folder đó làm tag.
   * - Nếu không có (file nằm trực tiếp trong pages) -> lấy folder cha trước "pages" (như src, blog).
   */
  const folderTag = isFolderAfterPages
    ? nextPart
    : pagesIndex > 0
      ? parts[pagesIndex - 1]
      : "root";

  let subPath = path
    .replace(/^.*\/pages/, "")
    .replace(".jsx", "")
    .replace(/\/index$/, "")
    .toLowerCase();

  // Giữ URL đúng cấu trúc: /tailwind-v4/ui-blocks/...
  const parent = pagesIndex > 0 ? parts[pagesIndex - 1] : "";
  const finalPath =
    (parent === "src" ? subPath : `/${parent}${subPath}`) || "/";

  return {
    path: finalPath,
    component: lazy(modules[path]),
    tag: folderTag, // Bây giờ tag sẽ là "ui-blocks", "ui-kit", "src", "blog"
  };
});

export default routes;

/* VÍ DỤ KẾT QUẢ MỚI:
  1. /src/pages/about.jsx 
     => { path: "/about", tag: "src" }

  2. /src/features/tailwind-v4/pages/ui-blocks/marketing/hero.jsx 
     => { path: "/tailwind-v4/ui-blocks/marketing/hero", tag: "ui-blocks" }
*/
