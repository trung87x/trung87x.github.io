import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With screenshots and stats
import WithScreenshotsAndStats from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/landing-pages/with_screenshots_and_stats";
import WithScreenshotsAndStatsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/landing-pages/with_screenshots_and_stats.jsx?raw";

// 02. With large screenshot and testimonial
import WithLargeScreenshotAndTestimonial from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/landing-pages/with_large_screenshot_and_testimonial";
import WithLargeScreenshotAndTestimonialRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/landing-pages/with_large_screenshot_and_testimonial.jsx?raw";

// 03. With background image hero and pricing section
import WithBackgroundImageHeroAndPricingSection from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/landing-pages/with_background_image_hero_and_pricing_section";
import WithBackgroundImageHeroAndPricingSectionRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/landing-pages/with_background_image_hero_and_pricing_section.jsx?raw";

// 04. With mobile screenshot and testimonials grid
import WithMobileScreenshotAndTestimonialsGrid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/landing-pages/with_mobile_screenshot_and_testimonials_grid";
import WithMobileScreenshotAndTestimonialsGridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/landing-pages/with_mobile_screenshot_and_testimonials_grid.jsx?raw";

const LandingPagesDemoPage = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* 01. With screenshots and stats */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. With screenshots and stats
        </h2>
        <PreviewWrapper
          name="Landing page with stats"
          code={WithScreenshotsAndStatsRaw}
        >
          <WithScreenshotsAndStats />
        </PreviewWrapper>
      </section>

      {/* 02. With large screenshot and testimonial */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. With large screenshot and testimonial
        </h2>
        <PreviewWrapper
          name="Landing page with large testimonial"
          code={WithLargeScreenshotAndTestimonialRaw}
        >
          <WithLargeScreenshotAndTestimonial />
        </PreviewWrapper>
      </section>

      {/* 03. With background image hero and pricing section */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. With background image hero and pricing
        </h2>
        <PreviewWrapper
          name="Landing page with pricing hero"
          code={WithBackgroundImageHeroAndPricingSectionRaw}
        >
          <WithBackgroundImageHeroAndPricingSection />
        </PreviewWrapper>
      </section>

      {/* 04. With mobile screenshot and testimonials grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. With mobile screenshot and testimonials grid
        </h2>
        <PreviewWrapper
          name="Mobile-focused landing page"
          code={WithMobileScreenshotAndTestimonialsGridRaw}
        >
          <WithMobileScreenshotAndTestimonialsGrid />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default LandingPagesDemoPage;
