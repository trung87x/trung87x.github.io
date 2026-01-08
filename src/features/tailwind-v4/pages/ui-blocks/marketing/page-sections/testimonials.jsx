import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Simple centered
import SimpleCentered from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/simple_centered";
import SimpleCenteredRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/simple_centered.jsx?raw";

// 02. With large avatar
import WithLargeAvatar from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/with_large_avatar";
import WithLargeAvatarRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/with_large_avatar.jsx?raw";

// 03. With overlapping image
import WithOverlappingImage from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/with_overlapping_image";
import WithOverlappingImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/with_overlapping_image.jsx?raw";

// 04. With background image
import WithBackgroundImage from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/with_background_image";
import WithBackgroundImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/with_background_image.jsx?raw";

// 05. Side-by-side
import SideBySide from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/side_by_side";
import SideBySideRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/side_by_side.jsx?raw";

// 06. With star rating
import WithStarRating from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/with_star_rating";
import WithStarRatingRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/with_star_rating.jsx?raw";

// 07. Grid
import Grid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/grid";
import GridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/grid.jsx?raw";

// 08. Subtle grid
import OffWhiteGrid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/off_white_grid";
import OffWhiteGridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/testimonials/off_white_grid.jsx?raw";

const TestimonialsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Simple centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Simple centered
        </h2>
        <PreviewWrapper name="Simple centered" code={SimpleCenteredRaw}>
          <SimpleCentered />
        </PreviewWrapper>
      </section>

      {/* 02. With large avatar */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. With large avatar
        </h2>
        <PreviewWrapper name="With large avatar" code={WithLargeAvatarRaw}>
          <WithLargeAvatar />
        </PreviewWrapper>
      </section>

      {/* 03. With overlapping image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. With overlapping image
        </h2>
        <PreviewWrapper
          name="With overlapping image"
          code={WithOverlappingImageRaw}
        >
          <WithOverlappingImage />
        </PreviewWrapper>
      </section>

      {/* 04. With background image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. With background image
        </h2>
        <PreviewWrapper
          name="With background image"
          code={WithBackgroundImageRaw}
        >
          <WithBackgroundImage />
        </PreviewWrapper>
      </section>

      {/* 05. Side-by-side */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Side-by-side
        </h2>
        <PreviewWrapper name="Side-by-side" code={SideBySideRaw}>
          <SideBySide />
        </PreviewWrapper>
      </section>

      {/* 06. With star rating */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. With star rating
        </h2>
        <PreviewWrapper name="With star rating" code={WithStarRatingRaw}>
          <WithStarRating />
        </PreviewWrapper>
      </section>

      {/* 07. Grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">07. Grid</h2>
        <PreviewWrapper name="Grid" code={GridRaw}>
          <Grid />
        </PreviewWrapper>
      </section>

      {/* 08. Subtle grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. Subtle grid
        </h2>
        <PreviewWrapper name="Subtle grid" code={OffWhiteGridRaw}>
          <OffWhiteGrid />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default TestimonialsDemoPage;
