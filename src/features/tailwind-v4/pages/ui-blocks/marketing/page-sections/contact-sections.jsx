import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Centered
import Centered from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/centered";
import CenteredRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/centered.jsx?raw";

// 02. Side-by-side grid
import SideBySideGrid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/side_by_side_grid";
import SideBySideGridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/side_by_side_grid.jsx?raw";

// 03. Split with pattern
import SplitWithPattern from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/split_with_pattern";
import SplitWithPatternRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/split_with_pattern.jsx?raw";

// 04. Simple four-column
import SimpleFourColumn from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/simple_four_column";
import SimpleFourColumnRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/simple_four_column.jsx?raw";

// 05. Simple centered
import SimpleCentered from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/simple_centered";
import SimpleCenteredRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/simple_centered.jsx?raw";

// 06. With testimonial
import WithTestimonial from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/with_testimonial";
import WithTestimonialRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/with_testimonial.jsx?raw";

// 07. Split with image
import SplitWithImage from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/split_with_image";
import SplitWithImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/contact-sections/split_with_image.jsx?raw";

const ContactSectionsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">01. Centered</h2>
        <PreviewWrapper name="Centered Bento Grid" code={CenteredRaw}>
          <Centered />
        </PreviewWrapper>
      </section>

      {/* 02. Side-by-side grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Side-by-side grid
        </h2>
        <PreviewWrapper name="Side-by-side grid" code={SideBySideGridRaw}>
          <SideBySideGrid />
        </PreviewWrapper>
      </section>

      {/* 03. Split with pattern */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Split with pattern
        </h2>
        <PreviewWrapper name="Split with pattern" code={SplitWithPatternRaw}>
          <SplitWithPattern />
        </PreviewWrapper>
      </section>

      {/* 04. Simple four-column */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Simple four-column
        </h2>
        <PreviewWrapper name="Simple four-column" code={SimpleFourColumnRaw}>
          <SimpleFourColumn />
        </PreviewWrapper>
      </section>

      {/* 05. Simple centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Simple centered
        </h2>
        <PreviewWrapper name="Simple centered bento" code={SimpleCenteredRaw}>
          <SimpleCentered />
        </PreviewWrapper>
      </section>

      {/* 06. With testimonial */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. With testimonial
        </h2>
        <PreviewWrapper name="Bento with testimonial" code={WithTestimonialRaw}>
          <WithTestimonial />
        </PreviewWrapper>
      </section>

      {/* 07. Split with image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Split with image
        </h2>
        <PreviewWrapper name="Split with image bento" code={SplitWithImageRaw}>
          <SplitWithImage />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default ContactSectionsDemoPage;
