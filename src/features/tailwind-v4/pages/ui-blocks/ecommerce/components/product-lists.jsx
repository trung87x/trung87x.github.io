import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With inline price
import WithInlinePrice from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_inline_price";
import WithInlinePriceRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_inline_price.jsx?raw";

// 02. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/simple.jsx?raw";

// 03. With CTA link
import WithCtaLink from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_cta_link";
import WithCtaLinkRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_cta_link.jsx?raw";

// 04. With color swatches and horizontal scrolling
import WithColorSwatchesAndHorizontalScrolling from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_color_swatches_and_horizontal_scrolling";
import WithColorSwatchesAndHorizontalScrollingRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_color_swatches_and_horizontal_scrolling.jsx?raw";

// 05. With tall images
import WithTallImages from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_tall_images";
import WithTallImagesRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_tall_images.jsx?raw";

// 06. With image overlay and add button
import WithImageOverlayAndAddButton from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_image_overlay_and_add_button";
import WithImageOverlayAndAddButtonRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_image_overlay_and_add_button.jsx?raw";

// 07. With tall images and CTA link
import WithTallImagesAndCtaLink from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_tall_images_and_cta_link";
import WithTallImagesAndCtaLinkRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_tall_images_and_cta_link.jsx?raw";

// 08. With border grid
import WithBorderGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_border_grid";
import WithBorderGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_border_grid.jsx?raw";

// 09. With supporting text
import WithSupportingText from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_supporting_text";
import WithSupportingTextRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_supporting_text.jsx?raw";

// 10. With inline price and CTA link
import WithInlinePriceAndCtaLink from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_inline_price_and_cta_link";
import WithInlinePriceAndCtaLinkRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/with_inline_price_and_cta_link.jsx?raw";

// 11. Card with full details
import CardWithFullDetails from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/card_with_full_details";
import CardWithFullDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-lists/card_with_full_details.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ProductListsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With inline price",
      component: <WithInlinePrice />,
      raw: WithInlinePriceRaw,
    },
    {
      id: "02",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "03",
      name: "With CTA link",
      component: <WithCtaLink />,
      raw: WithCtaLinkRaw,
    },
    {
      id: "04",
      name: "With color swatches and horizontal scrolling",
      component: <WithColorSwatchesAndHorizontalScrolling />,
      raw: WithColorSwatchesAndHorizontalScrollingRaw,
    },
    {
      id: "05",
      name: "With tall images",
      component: <WithTallImages />,
      raw: WithTallImagesRaw,
    },
    {
      id: "06",
      name: "With image overlay and add button",
      component: <WithImageOverlayAndAddButton />,
      raw: WithImageOverlayAndAddButtonRaw,
    },
    {
      id: "07",
      name: "With tall images and CTA link",
      component: <WithTallImagesAndCtaLink />,
      raw: WithTallImagesAndCtaLinkRaw,
    },
    {
      id: "08",
      name: "With border grid",
      component: <WithBorderGrid />,
      raw: WithBorderGridRaw,
    },
    {
      id: "09",
      name: "With supporting text",
      component: <WithSupportingText />,
      raw: WithSupportingTextRaw,
    },
    {
      id: "10",
      name: "With inline price and CTA link",
      component: <WithInlinePriceAndCtaLink />,
      raw: WithInlinePriceAndCtaLinkRaw,
    },
    {
      id: "11",
      name: "Card with full details",
      component: <CardWithFullDetails />,
      raw: CardWithFullDetailsRaw,
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

export default ProductListsDemoPage;
