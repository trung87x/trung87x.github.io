import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With text header and image product grid
import WithTextHeaderAndImageProductGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_text_header_and_image_product_grid";
import WithTextHeaderAndImageProductGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_text_header_and_image_product_grid.jsx?raw";

// 02. With image header and detail product grid
import WithImageHeaderAndDetailProductGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_image_header_and_detail_product_grid";
import WithImageHeaderAndDetailProductGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_image_header_and_detail_product_grid.jsx?raw";

// 03. With text header and simple product grid
import WithTextHeaderAndSimpleProductGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_text_header_and_simple_product_grid";
import WithTextHeaderAndSimpleProductGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_text_header_and_simple_product_grid.jsx?raw";

// 04. With product grid and pagination
import WithProductGridAndPagination from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_product_grid_and_pagination";
import WithProductGridAndPaginationRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_product_grid_and_pagination.jsx?raw";

// 05. With large images and filters sidebar
import WithLargeImagesAndFiltersSidebar from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_large_images_and_filters_sidebar";
import WithLargeImagesAndFiltersSidebarRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/category-pages/with_large_images_and_filters_sidebar.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const CategoryPagesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With text header and image product grid",
      component: <WithTextHeaderAndImageProductGrid />,
      raw: WithTextHeaderAndImageProductGridRaw,
    },
    {
      id: "02",
      name: "With image header and detail product grid",
      component: <WithImageHeaderAndDetailProductGrid />,
      raw: WithImageHeaderAndDetailProductGridRaw,
    },
    {
      id: "03",
      name: "With text header and simple product grid",
      component: <WithTextHeaderAndSimpleProductGrid />,
      raw: WithTextHeaderAndSimpleProductGridRaw,
    },
    {
      id: "04",
      name: "With product grid and pagination",
      component: <WithProductGridAndPagination />,
      raw: WithProductGridAndPaginationRaw,
    },
    {
      id: "05",
      name: "With large images and filters sidebar",
      component: <WithLargeImagesAndFiltersSidebar />,
      raw: WithLargeImagesAndFiltersSidebarRaw,
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section key={layout.id}>
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            {layout.id}. {layout.name}
          </h2>
          <PreviewWrapper name={layout.name} code={layout.raw}>
            {layout.component}
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default CategoryPagesDemoPage;
