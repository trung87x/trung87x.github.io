import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With small images
import WithSmallImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_small_images";
import WithSmallImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_small_images.jsx?raw";

// 02. With large images
import WithLargeImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_large_images";
import WithLargeImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_large_images.jsx?raw";

// 03. Grid with round images
import GridWithRoundImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/grid_with_round_images";
import GridWithRoundImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/grid_with_round_images.jsx?raw";

// 04. Large grid with cards
import LargeGridWithCards from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/dark_version_with_large_images";
import LargeGridWithCardsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/dark_version_with_large_images.jsx?raw";

// 05. With image and short paragraph
import WithImageAndShortParagraph from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_image_and_short_paragraph";
import WithImageAndShortParagraphRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_image_and_short_paragraph.jsx?raw";

// 06. With vertical images
import WithVerticalImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_vertical_images";
import WithVerticalImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_vertical_images.jsx?raw";

// 07. Full width with vertical images
import FullWidthWithVerticalImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/full_width_with_vertical_images";
import FullWidthWithVerticalImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/full_width_with_vertical_images.jsx?raw";

// 08. Grid with large round images
import GridWithLargeRoundImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/grid_with_large_round_images";
import GridWithLargeRoundImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/grid_with_large_round_images.jsx?raw";

// 09. With medium images
import WithMediumImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_medium_images_on_dark";
import WithMediumImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/team-sections/with_medium_images_on_dark.jsx?raw";

const TeamSectionsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. With small images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. With small images
        </h2>
        <PreviewWrapper name="With small images" code={WithSmallImagesRaw}>
          <WithSmallImages />
        </PreviewWrapper>
      </section>

      {/* 02. With large images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. With large images
        </h2>
        <PreviewWrapper name="With large images" code={WithLargeImagesRaw}>
          <WithLargeImages />
        </PreviewWrapper>
      </section>

      {/* 03. Grid with round images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Grid with round images
        </h2>
        <PreviewWrapper
          name="Grid with round images"
          code={GridWithRoundImagesRaw}
        >
          <GridWithRoundImages />
        </PreviewWrapper>
      </section>

      {/* 04. Large grid with cards */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Large grid with cards
        </h2>
        <PreviewWrapper
          name="Large grid with cards"
          code={LargeGridWithCardsRaw}
        >
          <LargeGridWithCards />
        </PreviewWrapper>
      </section>

      {/* 05. With image and short paragraph */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. With image and short paragraph
        </h2>
        <PreviewWrapper
          name="With image and short paragraph"
          code={WithImageAndShortParagraphRaw}
        >
          <WithImageAndShortParagraph />
        </PreviewWrapper>
      </section>

      {/* 06. With vertical images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. With vertical images
        </h2>
        <PreviewWrapper
          name="With vertical images"
          code={WithVerticalImagesRaw}
        >
          <WithVerticalImages />
        </PreviewWrapper>
      </section>

      {/* 07. Full width with vertical images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Full width with vertical images
        </h2>
        <PreviewWrapper
          name="Full width with vertical images"
          code={FullWidthWithVerticalImagesRaw}
        >
          <FullWidthWithVerticalImages />
        </PreviewWrapper>
      </section>

      {/* 08. Grid with large round images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. Grid with large round images
        </h2>
        <PreviewWrapper
          name="Grid with large round images"
          code={GridWithLargeRoundImagesRaw}
        >
          <GridWithLargeRoundImages />
        </PreviewWrapper>
      </section>

      {/* 09. With medium images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          09. With medium images
        </h2>
        <PreviewWrapper name="With medium images" code={WithMediumImagesRaw}>
          <WithMediumImages />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default TeamSectionsDemoPage;
