import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With image grid
import WithImageGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/with_image_grid";
import WithImageGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/with_image_grid.jsx?raw";

// 02. With tiered images
import WithTieredImages from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/with_tiered_images";
import WithTieredImagesRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/with_tiered_images.jsx?raw";

// 03. With image gallery and expandable details
import WithImageGalleryAndExpandableDetails from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/with_image_gallery_and_expandable_details";
import WithImageGalleryAndExpandableDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/with_image_gallery_and_expandable_details.jsx?raw";

// 04. Split with image
import SplitWithImage from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/split_with_image";
import SplitWithImageRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/split_with_image.jsx?raw";

// 05. With tabs
import WithTabs from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/with_tabs";
import WithTabsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-overviews/with_tabs.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ProductOverviewsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With image grid",
      component: <WithImageGrid />,
      raw: WithImageGridRaw,
    },
    {
      id: "02",
      name: "With tiered images",
      component: <WithTieredImages />,
      raw: WithTieredImagesRaw,
    },
    {
      id: "03",
      name: "With image gallery and expandable details",
      component: <WithImageGalleryAndExpandableDetails />,
      raw: WithImageGalleryAndExpandableDetailsRaw,
    },
    {
      id: "04",
      name: "Split with image",
      component: <SplitWithImage />,
      raw: SplitWithImageRaw,
    },
    {
      id: "05",
      name: "With tabs",
      component: <WithTabs />,
      raw: WithTabsRaw,
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

export default ProductOverviewsDemoPage;
