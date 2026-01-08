import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With related products
import WithRelatedProducts from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_related_products";
import WithRelatedProductsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_related_products.jsx?raw";

// 02. With image grid
import WithImageGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_image_grid";
import WithImageGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_image_grid.jsx?raw";

// 03. With expandable product details
import WithExpandableProductDetails from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_expandable_product_details";
import WithExpandableProductDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_expandable_product_details.jsx?raw";

// 04. With featured details
import WithFeaturedDetails from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_featured_details";
import WithFeaturedDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_featured_details.jsx?raw";

// 05. With tabs and related products
import WithTabsAndRelatedProducts from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_tabs_and_related_products";
import WithTabsAndRelatedProductsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/product-pages/with_tabs_and_related_products.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ProductPagesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With related products",
      component: <WithRelatedProducts />,
      raw: WithRelatedProductsRaw,
    },
    {
      id: "02",
      name: "With image grid",
      component: <WithImageGrid />,
      raw: WithImageGridRaw,
    },
    {
      id: "03",
      name: "With expandable product details",
      component: <WithExpandableProductDetails />,
      raw: WithExpandableProductDetailsRaw,
    },
    {
      id: "04",
      name: "With featured details",
      component: <WithFeaturedDetails />,
      raw: WithFeaturedDetailsRaw,
    },
    {
      id: "05",
      name: "With tabs and related products",
      component: <WithTabsAndRelatedProducts />,
      raw: WithTabsAndRelatedProductsRaw,
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

export default ProductPagesDemoPage;
