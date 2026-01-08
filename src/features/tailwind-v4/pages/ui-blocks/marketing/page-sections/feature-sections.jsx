import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With product screenshot
import WithProductScreenshot from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_product_screenshot";
import WithProductScreenshotRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_product_screenshot.jsx?raw";

// 02. Centered 2x2 grid
import Centered2x2Grid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/centered_2x2_grid";
import Centered2x2GridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/centered_2x2_grid.jsx?raw";

// 03. With large screenshot
import WithLargeScreenshot from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_large_screenshot";
import WithLargeScreenshotRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_large_screenshot.jsx?raw";

// 04. With large bordered screenshot
import WithLargeBorderedScreenshot from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_large_bordered_screenshot";
import WithLargeBorderedScreenshotRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_large_bordered_screenshot.jsx?raw";

// 05. Simple three column with small icons
import SimpleThreeColumnSmallIcons from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/simple_three_column_with_small_icons";
import SimpleThreeColumnSmallIconsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/simple_three_column_with_small_icons.jsx?raw";

// 06. With product screenshot on left
import WithProductScreenshotOnLeft from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_product_screenshot_on_left";
import WithProductScreenshotOnLeftRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_product_screenshot_on_left.jsx?raw";

// 07. Simple three column with large icons
import SimpleThreeColumnLargeIcons from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/simple_three_column_with_large_icons";
import SimpleThreeColumnLargeIconsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/simple_three_column_with_large_icons.jsx?raw";

// 08. Contained in panel
import ContainedInPanel from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/contained_in_panel";
import ContainedInPanelRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/contained_in_panel.jsx?raw";

// 09. With product screenshot panel
import WithProductScreenshotPanel from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_product_screenshot_panel";
import WithProductScreenshotPanelRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_product_screenshot_panel.jsx?raw";

// 10. With testimonial
import WithTestimonial from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_testimonial";
import WithTestimonialRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_testimonial.jsx?raw";

// 11. Offset 2x2 grid
import Offset2x2Grid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/offset_2x2_grid";
import Offset2x2GridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/offset_2x2_grid.jsx?raw";

// 12. With code example panel
import WithCodeExamplePanel from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_code_example_panel";
import WithCodeExamplePanelRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/with_code_example_panel.jsx?raw";

// 13. Offset with feature list
import OffsetWithFeatureList from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/offset_with_feature_list";
import OffsetWithFeatureListRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/offset_with_feature_list.jsx?raw";

// 14. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/simple.jsx?raw";

// 15. Simple 3x2 grid
import Simple3x2Grid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/simple_3x2_on_dark";
import Simple3x2GridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/feature-sections/simple_3x2_on_dark.jsx?raw";

const FeatureDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. With product screenshot */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. With product screenshot
        </h2>
        <PreviewWrapper
          name="With product screenshot"
          code={WithProductScreenshotRaw}
        >
          <WithProductScreenshot />
        </PreviewWrapper>
      </section>

      {/* 02. Centered 2x2 grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Centered 2x2 grid
        </h2>
        <PreviewWrapper name="Centered 2x2 grid" code={Centered2x2GridRaw}>
          <Centered2x2Grid />
        </PreviewWrapper>
      </section>

      {/* 03. With large screenshot */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. With large screenshot
        </h2>
        <PreviewWrapper
          name="With large screenshot"
          code={WithLargeScreenshotRaw}
        >
          <WithLargeScreenshot />
        </PreviewWrapper>
      </section>

      {/* 04. With large bordered screenshot */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. With large bordered screenshot
        </h2>
        <PreviewWrapper
          name="With large bordered screenshot"
          code={WithLargeBorderedScreenshotRaw}
        >
          <WithLargeBorderedScreenshot />
        </PreviewWrapper>
      </section>

      {/* 05. Simple three column with small icons */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Simple three column with small icons
        </h2>
        <PreviewWrapper
          name="Simple three column with small icons"
          code={SimpleThreeColumnSmallIconsRaw}
        >
          <SimpleThreeColumnSmallIcons />
        </PreviewWrapper>
      </section>

      {/* 06. With product screenshot on left */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. With product screenshot on left
        </h2>
        <PreviewWrapper
          name="With product screenshot on left"
          code={WithProductScreenshotOnLeftRaw}
        >
          <WithProductScreenshotOnLeft />
        </PreviewWrapper>
      </section>

      {/* 07. Simple three column with large icons */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Simple three column with large icons
        </h2>
        <PreviewWrapper
          name="Simple three column with large icons"
          code={SimpleThreeColumnLargeIconsRaw}
        >
          <SimpleThreeColumnLargeIcons />
        </PreviewWrapper>
      </section>

      {/* 08. Contained in panel */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. Contained in panel
        </h2>
        <PreviewWrapper name="Contained in panel" code={ContainedInPanelRaw}>
          <ContainedInPanel />
        </PreviewWrapper>
      </section>

      {/* 09. With product screenshot panel */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          09. With product screenshot panel
        </h2>
        <PreviewWrapper
          name="With product screenshot panel"
          code={WithProductScreenshotPanelRaw}
        >
          <WithProductScreenshotPanel />
        </PreviewWrapper>
      </section>

      {/* 10. With testimonial */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          10. With testimonial
        </h2>
        <PreviewWrapper name="With testimonial" code={WithTestimonialRaw}>
          <WithTestimonial />
        </PreviewWrapper>
      </section>

      {/* 11. Offset 2x2 grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          11. Offset 2x2 grid
        </h2>
        <PreviewWrapper name="Offset 2x2 grid" code={Offset2x2GridRaw}>
          <Offset2x2Grid />
        </PreviewWrapper>
      </section>

      {/* 12. With code example panel */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          12. With code example panel
        </h2>
        <PreviewWrapper
          name="With code example panel"
          code={WithCodeExamplePanelRaw}
        >
          <WithCodeExamplePanel />
        </PreviewWrapper>
      </section>

      {/* 13. Offset with feature list */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          13. Offset with feature list
        </h2>
        <PreviewWrapper
          name="Offset with feature list"
          code={OffsetWithFeatureListRaw}
        >
          <OffsetWithFeatureList />
        </PreviewWrapper>
      </section>

      {/* 14. Simple */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">14. Simple</h2>
        <PreviewWrapper name="Simple" code={SimpleRaw}>
          <Simple />
        </PreviewWrapper>
      </section>

      {/* 15. Simple 3x2 grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          15. Simple 3x2 grid
        </h2>
        <PreviewWrapper name="Simple 3x2 grid" code={Simple3x2GridRaw}>
          <Simple3x2Grid />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default FeatureDemoPage;
