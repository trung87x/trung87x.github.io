import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With image tiles
import WithImageTiles from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/about-pages/with_image_tiles";
import WithImageTilesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/about-pages/with_image_tiles.jsx?raw";

// 02. With timeline and stats
import WithTimelineAndStats from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/about-pages/with_timeline_and_stats";
import WithTimelineAndStatsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/about-pages/with_timeline_and_stats.jsx?raw";

// 03. With two column description
import WithTwoColumnDescription from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/about-pages/dark";
import WithTwoColumnDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/about-pages/dark.jsx?raw";

const AboutPagesDemoPage = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* 01. With image tiles */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. With image tiles
        </h2>
        <PreviewWrapper
          name="About page with image tiles"
          code={WithImageTilesRaw}
        >
          <WithImageTiles />
        </PreviewWrapper>
      </section>

      {/* 02. With timeline and stats */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. With timeline and stats
        </h2>
        <PreviewWrapper
          name="About page with timeline"
          code={WithTimelineAndStatsRaw}
        >
          <WithTimelineAndStats />
        </PreviewWrapper>
      </section>

      {/* 03. With two column description */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. With two column description
        </h2>
        <PreviewWrapper
          name="About page with two column description"
          code={WithTwoColumnDescriptionRaw}
        >
          <WithTwoColumnDescription />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default AboutPagesDemoPage;
