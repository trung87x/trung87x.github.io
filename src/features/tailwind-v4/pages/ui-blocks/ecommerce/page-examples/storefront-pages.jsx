import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With dark nav and footer
import WithDarkNavAndFooter from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/storefront-pages/with_dark_nav_and_footer";
import WithDarkNavAndFooterRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/storefront-pages/with_dark_nav_and_footer.jsx?raw";

// 02. With offers and testimonials
import WithOffersAndTestimonials from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/storefront-pages/with_offers_and_testimonials";
import WithOffersAndTestimonialsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/storefront-pages/with_offers_and_testimonials.jsx?raw";

// 03. With image tiles and feature sections
import WithImageTilesAndFeatureSections from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/storefront-pages/with_image_tiles_and_feature_sections";
import WithImageTilesAndFeatureSectionsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/storefront-pages/with_image_tiles_and_feature_sections.jsx?raw";

// 04. With overlapping image tiles and perks
import WithOverlappingImageTilesAndPerks from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/storefront-pages/with_overlapping_image_tiles_and_perks";
import WithOverlappingImageTilesAndPerksRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/storefront-pages/with_overlapping_image_tiles_and_perks.jsx?raw";

const StorefrontsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With dark nav and footer",
      component: <WithDarkNavAndFooter />,
      raw: WithDarkNavAndFooterRaw,
    },
    {
      id: "02",
      name: "With offers and testimonials",
      component: <WithOffersAndTestimonials />,
      raw: WithOffersAndTestimonialsRaw,
    },
    {
      id: "03",
      name: "With image tiles and feature sections",
      component: <WithImageTilesAndFeatureSections />,
      raw: WithImageTilesAndFeatureSectionsRaw,
    },
    {
      id: "04",
      name: "With overlapping image tiles and perks",
      component: <WithOverlappingImageTilesAndPerks />,
      raw: WithOverlappingImageTilesAndPerksRaw,
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

export default StorefrontsDemoPage;
