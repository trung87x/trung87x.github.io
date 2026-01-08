import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With sticky product screenshot
import WithStickyProductScreenshot from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/with_sticky_product_screenshot";
import WithStickyProductScreenshotRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/with_sticky_product_screenshot.jsx?raw";

// 02. With testimonial
import WithTestimonial from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/with_testimonial";
import WithTestimonialRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/with_testimonial.jsx?raw";

// 03. With image tiles
import WithImageTitles from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/with_image_titles";
import WithImageTitlesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/with_image_titles.jsx?raw";

// 04. Two columns with screenshot
import TwoColumnsWithScreenshot from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/two_columns_with_screenshot";
import TwoColumnsWithScreenshotRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/two_columns_with_screenshot.jsx?raw";

// 05. With testimonial and stats
import WithTestimonialAndStats from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/with_testimonial_and_stats";
import WithTestimonialAndStatsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/with_testimonial_and_stats.jsx?raw";

// 06. Split with image
import SplitWithImage from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/split_with_image";
import SplitWithImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/split_with_image.jsx?raw";

// 07. Centered
import Centered from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/centered";
import CenteredRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/content-sections/centered.jsx?raw";

const ContentSectionsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. With sticky product screenshot */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. With sticky product screenshot
        </h2>
        <PreviewWrapper
          name="With sticky product screenshot"
          code={WithStickyProductScreenshotRaw}
        >
          <WithStickyProductScreenshot />
        </PreviewWrapper>
      </section>

      {/* 02. With testimonial */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. With testimonial
        </h2>
        <PreviewWrapper name="With testimonial" code={WithTestimonialRaw}>
          <WithTestimonial />
        </PreviewWrapper>
      </section>

      {/* 03. With image tiles */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. With image tiles
        </h2>
        <PreviewWrapper name="With image tiles" code={WithImageTitlesRaw}>
          <WithImageTitles />
        </PreviewWrapper>
      </section>

      {/* 04. Two columns with screenshot */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Two columns with screenshot
        </h2>
        <PreviewWrapper
          name="Two columns with screenshot"
          code={TwoColumnsWithScreenshotRaw}
        >
          <TwoColumnsWithScreenshot />
        </PreviewWrapper>
      </section>

      {/* 05. With testimonial and stats */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. With testimonial and stats
        </h2>
        <PreviewWrapper
          name="With testimonial and stats"
          code={WithTestimonialAndStatsRaw}
        >
          <WithTestimonialAndStats />
        </PreviewWrapper>
      </section>

      {/* 06. Split with image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. Split with image
        </h2>
        <PreviewWrapper name="Split with image" code={SplitWithImageRaw}>
          <SplitWithImage />
        </PreviewWrapper>
      </section>

      {/* 07. Centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">07. Centered</h2>
        <PreviewWrapper name="Centered content" code={CenteredRaw}>
          <Centered />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default ContentSectionsDemoPage;
