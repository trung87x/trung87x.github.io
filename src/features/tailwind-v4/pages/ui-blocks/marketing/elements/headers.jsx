import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With stacked flyout menu
import WithStackedFlyoutMenu from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_stacked_flyout_menu";
import WithStackedFlyoutMenuRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_stacked_flyout_menu.jsx?raw";

// 02. Constrained
import Constrained from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/constrained";
import ConstrainedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/constrained.jsx?raw";

// 03. On brand background
import OnBrandBackground from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/on_brand_background";
import OnBrandBackgroundRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/on_brand_background.jsx?raw";

// 04. With full width flyout menu
import WithFullWidthFlyoutMenu from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_full_width_flyout_menu";
import WithFullWidthFlyoutMenuRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_full_width_flyout_menu.jsx?raw";

// 05. Full width
import FullWidth from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/full_width";
import FullWidthRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/full_width.jsx?raw";

// 06. With call-to-action
import WithCallToAction from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_call_to_action";
import WithCallToActionRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_call_to_action.jsx?raw";

// 07. With multiple flyout menus
import WithMultipleFlyoutMenus from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_multiple_flyout_menus";
import WithMultipleFlyoutMenusRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_multiple_flyout_menus.jsx?raw";

// 08. With icons in mobile menu
import WithIconsInMobileMenu from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_icons_in_mobile_menu";
import WithIconsInMobileMenuRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_icons_in_mobile_menu.jsx?raw";

// 09. With left-aligned nav
import WithLeftAlignedNav from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_left_aligned_nav";
import WithLeftAlignedNavRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_left_aligned_nav.jsx?raw";

// 10. With right-aligned nav
import WithRightAlignedNav from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_right_aligned_nav";
import WithRightAlignedNavRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_right_aligned_nav.jsx?raw";

// 11. With centered logo
import WithCenteredLogo from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_centered_logo";
import WithCenteredLogoRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/elements/headers/with_centered_logo.jsx?raw";

const HeadersDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. With stacked flyout menu */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. With stacked flyout menu
        </h2>
        <PreviewWrapper
          name="With stacked flyout menu"
          code={WithStackedFlyoutMenuRaw}
        >
          <WithStackedFlyoutMenu />
        </PreviewWrapper>
      </section>

      {/* 02. Constrained */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Constrained
        </h2>
        <PreviewWrapper name="Constrained header" code={ConstrainedRaw}>
          <Constrained />
        </PreviewWrapper>
      </section>

      {/* 03. On brand background */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. On brand background
        </h2>
        <PreviewWrapper name="On brand background" code={OnBrandBackgroundRaw}>
          <OnBrandBackground />
        </PreviewWrapper>
      </section>

      {/* 04. With full width flyout menu */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. With full width flyout menu
        </h2>
        <PreviewWrapper
          name="With full width flyout menu"
          code={WithFullWidthFlyoutMenuRaw}
        >
          <WithFullWidthFlyoutMenu />
        </PreviewWrapper>
      </section>

      {/* 05. Full width */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">05. Full width</h2>
        <PreviewWrapper name="Full width header" code={FullWidthRaw}>
          <FullWidth />
        </PreviewWrapper>
      </section>

      {/* 06. With call-to-action */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. With call-to-action
        </h2>
        <PreviewWrapper name="With call-to-action" code={WithCallToActionRaw}>
          <WithCallToAction />
        </PreviewWrapper>
      </section>

      {/* 07. With multiple flyout menus */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. With multiple flyout menus
        </h2>
        <PreviewWrapper
          name="With multiple flyout menus"
          code={WithMultipleFlyoutMenusRaw}
        >
          <WithMultipleFlyoutMenus />
        </PreviewWrapper>
      </section>

      {/* 08. With icons in mobile menu */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. With icons in mobile menu
        </h2>
        <PreviewWrapper
          name="With icons in mobile menu"
          code={WithIconsInMobileMenuRaw}
        >
          <WithIconsInMobileMenu />
        </PreviewWrapper>
      </section>

      {/* 09. With left-aligned nav */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          09. With left-aligned nav
        </h2>
        <PreviewWrapper
          name="With left-aligned nav"
          code={WithLeftAlignedNavRaw}
        >
          <WithLeftAlignedNav />
        </PreviewWrapper>
      </section>

      {/* 10. With right-aligned nav */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          10. With right-aligned nav
        </h2>
        <PreviewWrapper
          name="With right-aligned nav"
          code={WithRightAlignedNavRaw}
        >
          <WithRightAlignedNav />
        </PreviewWrapper>
      </section>

      {/* 11. With centered logo */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          11. With centered logo
        </h2>
        <PreviewWrapper name="With centered logo" code={WithCenteredLogoRaw}>
          <WithCenteredLogo />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default HeadersDemoPage;
