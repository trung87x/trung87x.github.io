import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With image grid
import WithImageGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_image_grid";
import WithImageGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_image_grid.jsx?raw";

// 02. With header, images, and descriptions
import WithHeaderImagesAndDescriptions from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_header__images__and_descriptions";
import WithHeaderImagesAndDescriptionsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_header__images__and_descriptions.jsx?raw";

// 03. With fading image
import WithFadingImage from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_fading_image";
import WithFadingImageRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_fading_image.jsx?raw";

// 04. With wide images
import WithWideImages from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_wide_images";
import WithWideImagesRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_wide_images.jsx?raw";

// 05. With split image
import WithSplitImage from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_split_image";
import WithSplitImageRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_split_image.jsx?raw";

// 06. With tabs
import WithTabs from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_tabs";
import WithTabsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_tabs.jsx?raw";

// 07. With alternating sections
import WithAlternatingSections from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_alternating_sections";
import WithAlternatingSectionsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_alternating_sections.jsx?raw";

// 08. With square images
import WithSquareImages from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_square_images";
import WithSquareImagesRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_square_images.jsx?raw";

// 09. With tiered images
import WithTieredImages from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_tiered_images";
import WithTieredImagesRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-features/with_tiered_images.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ProductFeaturesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With image grid",
      component: <WithImageGrid />,
      raw: WithImageGridRaw,
    },
    {
      id: "02",
      name: "With header, images, and descriptions",
      component: <WithHeaderImagesAndDescriptions />,
      raw: WithHeaderImagesAndDescriptionsRaw,
    },
    {
      id: "03",
      name: "With fading image",
      component: <WithFadingImage />,
      raw: WithFadingImageRaw,
    },
    {
      id: "04",
      name: "With wide images",
      component: <WithWideImages />,
      raw: WithWideImagesRaw,
    },
    {
      id: "05",
      name: "With split image",
      component: <WithSplitImage />,
      raw: WithSplitImageRaw,
    },
    {
      id: "06",
      name: "With tabs",
      component: <WithTabs />,
      raw: WithTabsRaw,
    },
    {
      id: "07",
      name: "With alternating sections",
      component: <WithAlternatingSections />,
      raw: WithAlternatingSectionsRaw,
    },
    {
      id: "08",
      name: "With square images",
      component: <WithSquareImages />,
      raw: WithSquareImagesRaw,
    },
    {
      id: "09",
      name: "With tiered images",
      component: <WithTieredImages />,
      raw: WithTieredImagesRaw,
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

export default ProductFeaturesDemoPage;
