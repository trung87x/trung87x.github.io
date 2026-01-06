import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. With stats
import WithStats from "@/components/ui-blocks/marketing/page-sections/header-sections/with_stats";
import WithStatsRaw from "@/components/ui-blocks/marketing/page-sections/header-sections/with_stats.jsx?raw";

// 02. Centered
import Centered from "@/components/ui-blocks/marketing/page-sections/header-sections/centered";
import CenteredRaw from "@/components/ui-blocks/marketing/page-sections/header-sections/centered.jsx?raw";

// 03. Centered with eyebrow
import CenteredWithEyebrow from "@/components/ui-blocks/marketing/page-sections/header-sections/centered_with_eyebrow";
import CenteredWithEyebrowRaw from "@/components/ui-blocks/marketing/page-sections/header-sections/centered_with_eyebrow.jsx?raw";

// 04. With cards
import WithCards from "@/components/ui-blocks/marketing/page-sections/header-sections/with_cards";
import WithCardsRaw from "@/components/ui-blocks/marketing/page-sections/header-sections/with_cards.jsx?raw";

// 05. Simple
import Simple from "@/components/ui-blocks/marketing/page-sections/header-sections/simple";
import SimpleRaw from "@/components/ui-blocks/marketing/page-sections/header-sections/simple.jsx?raw";

// 06. Simple with eyebrow
import SimpleWithEyebrow from "@/components/ui-blocks/marketing/page-sections/header-sections/simple_with_eyebrow";
import SimpleWithEyebrowRaw from "@/components/ui-blocks/marketing/page-sections/header-sections/simple_with_eyebrow.jsx?raw";

// 07. Simple with background image
import SimpleWithBackgroundImage from "@/components/ui-blocks/marketing/page-sections/header-sections/simple_with_background_image";
import SimpleWithBackgroundImageRaw from "@/components/ui-blocks/marketing/page-sections/header-sections/simple_with_background_image.jsx?raw";

// 08. Centered with background image
import CenteredWithBackgroundImage from "@/components/ui-blocks/marketing/page-sections/header-sections/centered_with_background_image";
import CenteredWithBackgroundImageRaw from "@/components/ui-blocks/marketing/page-sections/header-sections/centered_with_background_image.jsx?raw";

const HeaderSectionsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. With stats */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">01. With stats</h2>
        <PreviewWrapper name="With stats" code={WithStatsRaw}>
          <WithStats />
        </PreviewWrapper>
      </section>

      {/* 02. Centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">02. Centered</h2>
        <PreviewWrapper name="Centered" code={CenteredRaw}>
          <Centered />
        </PreviewWrapper>
      </section>

      {/* 03. Centered with eyebrow */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Centered with eyebrow
        </h2>
        <PreviewWrapper
          name="Centered with eyebrow"
          code={CenteredWithEyebrowRaw}
        >
          <CenteredWithEyebrow />
        </PreviewWrapper>
      </section>

      {/* 04. With cards */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">04. With cards</h2>
        <PreviewWrapper name="With cards" code={WithCardsRaw}>
          <WithCards />
        </PreviewWrapper>
      </section>

      {/* 05. Simple */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">05. Simple</h2>
        <PreviewWrapper name="Simple" code={SimpleRaw}>
          <Simple />
        </PreviewWrapper>
      </section>

      {/* 06. Simple with eyebrow */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. Simple with eyebrow
        </h2>
        <PreviewWrapper name="Simple with eyebrow" code={SimpleWithEyebrowRaw}>
          <SimpleWithEyebrow />
        </PreviewWrapper>
      </section>

      {/* 07. Simple with background image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Simple with background image
        </h2>
        <PreviewWrapper
          name="Simple with background image"
          code={SimpleWithBackgroundImageRaw}
        >
          <SimpleWithBackgroundImage />
        </PreviewWrapper>
      </section>

      {/* 08. Centered with background image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. Centered with background image
        </h2>
        <PreviewWrapper
          name="Centered with background image"
          code={CenteredWithBackgroundImageRaw}
        >
          <CenteredWithBackgroundImage />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default HeaderSectionsDemoPage;
