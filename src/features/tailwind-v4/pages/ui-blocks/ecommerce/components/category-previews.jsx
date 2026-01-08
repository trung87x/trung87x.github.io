import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Three-column
import ThreeColumn from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/three_column";
import ThreeColumnRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/three_column.jsx?raw";

// 02. With image backgrounds
import WithImageBackgrounds from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/with_image_backgrounds";
import WithImageBackgroundsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/with_image_backgrounds.jsx?raw";

// 03. With background image and detail overlay
import WithBackgroundImageAndDetailOverlay from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/with_background_image_and_detail_overlay";
import WithBackgroundImageAndDetailOverlayRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/with_background_image_and_detail_overlay.jsx?raw";

// 04. Three-column with description
import ThreeColumnWithDescription from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/three_column_with_description";
import ThreeColumnWithDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/three_column_with_description.jsx?raw";

// 05. With scrolling cards
import WithScrollingCards from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/with_scrolling_cards";
import WithScrollingCardsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/with_scrolling_cards.jsx?raw";

// 06. With split images
import WithSplitImages from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/with_split_images";
import WithSplitImagesRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/category-previews/with_split_images.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const CategoryPreviewsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Three-column",
      component: <ThreeColumn />,
      raw: ThreeColumnRaw,
    },
    {
      id: "02",
      name: "With image backgrounds",
      component: <WithImageBackgrounds />,
      raw: WithImageBackgroundsRaw,
    },
    {
      id: "03",
      name: "With background image and detail overlay",
      component: <WithBackgroundImageAndDetailOverlay />,
      raw: WithBackgroundImageAndDetailOverlayRaw,
    },
    {
      id: "04",
      name: "Three-column with description",
      component: <ThreeColumnWithDescription />,
      raw: ThreeColumnWithDescriptionRaw,
    },
    {
      id: "05",
      name: "With scrolling cards",
      component: <WithScrollingCards />,
      raw: WithScrollingCardsRaw,
    },
    {
      id: "06",
      name: "With split images",
      component: <WithSplitImages />,
      raw: WithSplitImagesRaw,
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

export default CategoryPreviewsDemoPage;
