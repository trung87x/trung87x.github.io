import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With image tiles
import WithImageTiles from "@/component-plus/ecommerce/components/promo-sections/with_image_tiles";
import WithImageTilesRaw from "@/component-plus/ecommerce/components/promo-sections/with_image_tiles.jsx?raw";

// 02. With fading background image and testimonials
import WithFadingBackgroundAndTestimonials from "@/component-plus/ecommerce/components/promo-sections/with_fading_background_image_and_testimonials";
import WithFadingBackgroundAndTestimonialsRaw from "@/component-plus/ecommerce/components/promo-sections/with_fading_background_image_and_testimonials.jsx?raw";

// 03. Full-width with background image
import FullWidthWithBackgroundImage from "@/component-plus/ecommerce/components/promo-sections/full_width_with_background_image";
import FullWidthWithBackgroundImageRaw from "@/component-plus/ecommerce/components/promo-sections/full_width_with_background_image.jsx?raw";

// 04. Full-width with overlapping image tiles
import FullWidthWithOverlappingImageTiles from "@/component-plus/ecommerce/components/promo-sections/full_width_with_overlapping_image_tiles";
import FullWidthWithOverlappingImageTilesRaw from "@/component-plus/ecommerce/components/promo-sections/full_width_with_overlapping_image_tiles.jsx?raw";

// 05. With background image
import WithBackgroundImage from "@/component-plus/ecommerce/components/promo-sections/with_background_image";
import WithBackgroundImageRaw from "@/component-plus/ecommerce/components/promo-sections/with_background_image.jsx?raw";

// 06. With overlapping image tiles
import WithOverlappingImageTiles from "@/component-plus/ecommerce/components/promo-sections/with_overlapping_image_tiles";
import WithOverlappingImageTilesRaw from "@/component-plus/ecommerce/components/promo-sections/with_overlapping_image_tiles.jsx?raw";

// 07. With offers and split image
import WithOffersAndSplitImage from "@/component-plus/ecommerce/components/promo-sections/with_offers_and_split_image";
import WithOffersAndSplitImageRaw from "@/component-plus/ecommerce/components/promo-sections/with_offers_and_split_image.jsx?raw";

// 08. Full-width with background image and large content
import FullWidthWithBackgroundImageAndLargeContent from "@/component-plus/ecommerce/components/promo-sections/full_width_with_background_image_and_large_content";
import FullWidthWithBackgroundImageAndLargeContentRaw from "@/component-plus/ecommerce/components/promo-sections/full_width_with_background_image_and_large_content.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const PromoSectionsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With image tiles",
      component: <WithImageTiles />,
      raw: WithImageTilesRaw,
    },
    {
      id: "02",
      name: "With fading background image and testimonials",
      component: <WithFadingBackgroundAndTestimonials />,
      raw: WithFadingBackgroundAndTestimonialsRaw,
    },
    {
      id: "03",
      name: "Full-width with background image",
      component: <FullWidthWithBackgroundImage />,
      raw: FullWidthWithBackgroundImageRaw,
    },
    {
      id: "04",
      name: "Full-width with overlapping image tiles",
      component: <FullWidthWithOverlappingImageTiles />,
      raw: FullWidthWithOverlappingImageTilesRaw,
    },
    {
      id: "05",
      name: "With background image",
      component: <WithBackgroundImage />,
      raw: WithBackgroundImageRaw,
    },
    {
      id: "06",
      name: "With overlapping image tiles",
      component: <WithOverlappingImageTiles />,
      raw: WithOverlappingImageTilesRaw,
    },
    {
      id: "07",
      name: "With offers and split image",
      component: <WithOffersAndSplitImage />,
      raw: WithOffersAndSplitImageRaw,
    },
    {
      id: "08",
      name: "Full-width with background image and large content",
      component: <FullWidthWithBackgroundImageAndLargeContent />,
      raw: FullWidthWithBackgroundImageAndLargeContentRaw,
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

export default PromoSectionsDemoPage;
