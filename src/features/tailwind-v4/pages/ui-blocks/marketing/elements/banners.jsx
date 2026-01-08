import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With button
import WithButton from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/with_button";
import WithButtonRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/with_button.jsx?raw";

// 02. On dark
import OnDark from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/on_dark";
import OnDarkRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/on_dark.jsx?raw";

// 03. On brand
import OnBrand from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/on_brand";
import OnBrandRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/on_brand.jsx?raw";

// 04. With background glow
import WithBackgroundGlow from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/with_background_glow";
import WithBackgroundGlowRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/with_background_glow.jsx?raw";

// 05. With link
import WithLink from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/with_link";
import WithLinkRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/with_link.jsx?raw";

// 06. Left-aligned
import LeftAligned from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/left_aligned";
import LeftAlignedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/left_aligned.jsx?raw";

// 07. Bottom aligned
import BottomAligned from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/bottom_aligned";
import BottomAlignedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/bottom_aligned.jsx?raw";

// 08. Floating at bottom
import FloatingAtBottom from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/floating_at_bottom";
import FloatingAtBottomRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/floating_at_bottom.jsx?raw";

// 09. Floating at bottom centered
import FloatingAtBottomCentered from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/floating_at_bottom_centered";
import FloatingAtBottomCenteredRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/floating_at_bottom_centered.jsx?raw";

// 10. Privacy notice right-aligned
import PrivacyNoticeRightAligned from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/privacy_notice_right_aligned";
import PrivacyNoticeRightAlignedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/privacy_notice_right_aligned.jsx?raw";

// 11. Privacy notice centered
import PrivacyNoticeCentered from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/privacy_notice_centered";
import PrivacyNoticeCenteredRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/privacy_notice_centered.jsx?raw";

// 12. Privacy notice left-aligned
import PrivacyNoticeLeftAligned from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/privacy_notice_left_aligned";
import PrivacyNoticeLeftAlignedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/privacy_notice_left_aligned.jsx?raw";

// 13. Privacy notice full width
import PrivacyNoticeFullWidth from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/privacy_notice_full_width";
import PrivacyNoticeFullWidthRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/banners/privacy_notice_full_width.jsx?raw";

const BannersDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. With button */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. With button
        </h2>
        <PreviewWrapper name="Banner with button" code={WithButtonRaw}>
          <WithButton />
        </PreviewWrapper>
      </section>

      {/* 02. On dark */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">02. On dark</h2>
        <PreviewWrapper name="Banner on dark" code={OnDarkRaw}>
          <OnDark />
        </PreviewWrapper>
      </section>

      {/* 03. On brand */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">03. On brand</h2>
        <PreviewWrapper name="Banner on brand" code={OnBrandRaw}>
          <OnBrand />
        </PreviewWrapper>
      </section>

      {/* 04. With background glow */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. With background glow
        </h2>
        <PreviewWrapper
          name="With background glow"
          code={WithBackgroundGlowRaw}
        >
          <WithBackgroundGlow />
        </PreviewWrapper>
      </section>

      {/* 05. With link */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">05. With link</h2>
        <PreviewWrapper name="Banner with link" code={WithLinkRaw}>
          <WithLink />
        </PreviewWrapper>
      </section>

      {/* 06. Left-aligned */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. Left-aligned
        </h2>
        <PreviewWrapper name="Left-aligned banner" code={LeftAlignedRaw}>
          <LeftAligned />
        </PreviewWrapper>
      </section>

      {/* 07. Bottom aligned */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Bottom aligned
        </h2>
        <PreviewWrapper name="Bottom aligned banner" code={BottomAlignedRaw}>
          <BottomAligned />
        </PreviewWrapper>
      </section>

      {/* 08. Floating at bottom */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. Floating at bottom
        </h2>
        <PreviewWrapper name="Floating at bottom" code={FloatingAtBottomRaw}>
          <FloatingAtBottom />
        </PreviewWrapper>
      </section>

      {/* 09. Floating at bottom centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          09. Floating at bottom centered
        </h2>
        <PreviewWrapper
          name="Floating at bottom centered"
          code={FloatingAtBottomCenteredRaw}
        >
          <FloatingAtBottomCentered />
        </PreviewWrapper>
      </section>

      {/* 10. Privacy notice right-aligned */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          10. Privacy notice right-aligned
        </h2>
        <PreviewWrapper
          name="Privacy notice right-aligned"
          code={PrivacyNoticeRightAlignedRaw}
        >
          <PrivacyNoticeRightAligned />
        </PreviewWrapper>
      </section>

      {/* 11. Privacy notice centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          11. Privacy notice centered
        </h2>
        <PreviewWrapper
          name="Privacy notice centered"
          code={PrivacyNoticeCenteredRaw}
        >
          <PrivacyNoticeCentered />
        </PreviewWrapper>
      </section>

      {/* 12. Privacy notice left-aligned */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          12. Privacy notice left-aligned
        </h2>
        <PreviewWrapper
          name="Privacy notice left-aligned"
          code={PrivacyNoticeLeftAlignedRaw}
        >
          <PrivacyNoticeLeftAligned />
        </PreviewWrapper>
      </section>

      {/* 13. Privacy notice full width */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          13. Privacy notice full width
        </h2>
        <PreviewWrapper
          name="Privacy notice full width"
          code={PrivacyNoticeFullWidthRaw}
        >
          <PrivacyNoticeFullWidth />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default BannersDemoPage;
