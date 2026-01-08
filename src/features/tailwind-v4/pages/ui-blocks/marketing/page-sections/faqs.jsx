import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Offset with supporting text
import OffsetWithSupportingText from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/offset_with_supporting_text";
import OffsetWithSupportingTextRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/offset_with_supporting_text.jsx?raw";

// 02. Centered accordion
import CenteredAccordion from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/centered_accordion";
import CenteredAccordionRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/centered_accordion.jsx?raw";

// 03. Side-by-side
import SideBySide from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/side_by_side";
import SideBySideRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/side_by_side.jsx?raw";

// 04. Three columns
import ThreeColumns from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/three_columns";
import ThreeColumnsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/three_columns.jsx?raw";

// 05. Three columns with centered introduction
import ThreeColumnsWithCenteredIntro from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/three_columns_with_centered_introduction";
import ThreeColumnsWithCenteredIntroRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/three_columns_with_centered_introduction.jsx?raw";

// 06. Two columns
import TwoColumns from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/two_columns";
import TwoColumnsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/two_columns.jsx?raw";

// 07. Two columns with centered introduction
import TwoColumnsWithCenteredIntro from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/two_columns_with_centered_introduction";
import TwoColumnsWithCenteredIntroRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/faqs/two_columns_with_centered_introduction.jsx?raw";

const FaqDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Offset with supporting text */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Offset with supporting text
        </h2>
        <PreviewWrapper
          name="Offset with supporting text"
          code={OffsetWithSupportingTextRaw}
        >
          <OffsetWithSupportingText />
        </PreviewWrapper>
      </section>

      {/* 02. Centered accordion */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Centered accordion
        </h2>
        <PreviewWrapper name="Centered accordion" code={CenteredAccordionRaw}>
          <CenteredAccordion />
        </PreviewWrapper>
      </section>

      {/* 03. Side-by-side */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Side-by-side
        </h2>
        <PreviewWrapper name="Side-by-side FAQ" code={SideBySideRaw}>
          <SideBySide />
        </PreviewWrapper>
      </section>

      {/* 04. Three columns */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Three columns
        </h2>
        <PreviewWrapper name="Three columns FAQ" code={ThreeColumnsRaw}>
          <ThreeColumns />
        </PreviewWrapper>
      </section>

      {/* 05. Three columns with centered introduction */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Three columns with centered introduction
        </h2>
        <PreviewWrapper
          name="Three columns with centered intro"
          code={ThreeColumnsWithCenteredIntroRaw}
        >
          <ThreeColumnsWithCenteredIntro />
        </PreviewWrapper>
      </section>

      {/* 06. Two columns */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. Two columns
        </h2>
        <PreviewWrapper name="Two columns FAQ" code={TwoColumnsRaw}>
          <TwoColumns />
        </PreviewWrapper>
      </section>

      {/* 07. Two columns with centered introduction */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Two columns with centered introduction
        </h2>
        <PreviewWrapper
          name="Two columns with centered intro"
          code={TwoColumnsWithCenteredIntroRaw}
        >
          <TwoColumnsWithCenteredIntro />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default FaqDemoPage;
