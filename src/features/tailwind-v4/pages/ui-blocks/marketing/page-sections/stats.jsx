import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/simple.jsx?raw";

// 02. Simple grid
import SimpleGrid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/simple_grid";
import SimpleGridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/simple_grid.jsx?raw";

// 03. With background image
import WithBackgroundImage from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/with_background_image";
import WithBackgroundImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/with_background_image.jsx?raw";

// 04. Split with image
import SplitWithImage from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/split_with_image";
import SplitWithImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/split_with_image.jsx?raw";

// 05. Timeline
import Timeline from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/timeline";
import TimelineRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/timeline.jsx?raw";

// 06. Stepped
import Stepped from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/stepped";
import SteppedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/stepped.jsx?raw";

// 07. With two column description
import WithTwoColumnDescription from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/with_two_column_description_on_dark";
import WithTwoColumnDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/with_two_column_description_on_dark.jsx?raw";

// 08. With description
import WithDescription from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/with_description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/stats-sections/with_description.jsx?raw";

const StatsSectionsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Simple */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">01. Simple</h2>
        <PreviewWrapper name="Simple" code={SimpleRaw}>
          <Simple />
        </PreviewWrapper>
      </section>

      {/* 02. Simple grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Simple grid
        </h2>
        <PreviewWrapper name="Simple grid" code={SimpleGridRaw}>
          <SimpleGrid />
        </PreviewWrapper>
      </section>

      {/* 03. With background image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. With background image
        </h2>
        <PreviewWrapper
          name="With background image"
          code={WithBackgroundImageRaw}
        >
          <WithBackgroundImage />
        </PreviewWrapper>
      </section>

      {/* 04. Split with image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Split with image
        </h2>
        <PreviewWrapper name="Split with image" code={SplitWithImageRaw}>
          <SplitWithImage />
        </PreviewWrapper>
      </section>

      {/* 05. Timeline */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">05. Timeline</h2>
        <PreviewWrapper name="Timeline" code={TimelineRaw}>
          <Timeline />
        </PreviewWrapper>
      </section>

      {/* 06. Stepped */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">06. Stepped</h2>
        <PreviewWrapper name="Stepped" code={SteppedRaw}>
          <Stepped />
        </PreviewWrapper>
      </section>

      {/* 07. With two column description */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. With two column description
        </h2>
        <PreviewWrapper
          name="With two column description"
          code={WithTwoColumnDescriptionRaw}
        >
          <WithTwoColumnDescription />
        </PreviewWrapper>
      </section>

      {/* 08. With description */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. With description
        </h2>
        <PreviewWrapper name="With description" code={WithDescriptionRaw}>
          <WithDescription />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default StatsSectionsDemoPage;
