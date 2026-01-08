import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Branded nav with white page header
import WithLighterPageHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/dark_nav_with_white_page_header";
import WithLighterPageHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/dark_nav_with_white_page_header.jsx?raw";

// 02. With bottom border
import WithBottomBorder from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/light_nav_with_bottom_border";
import WithBottomBorderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/light_nav_with_bottom_border.jsx?raw";

// 03. On subtle background
import OnSubtleBackground from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/light_nav_on_gray_background";
import OnSubtleBackgroundRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/light_nav_on_gray_background.jsx?raw";

// 04. Branded nav with compact lighter page header
import BrandedNavCompactLighter from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/branded_nav_with_compact_white_page_header";
import BrandedNavCompactLighterRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/branded_nav_with_compact_white_page_header.jsx?raw";

// 05. With overlap
import WithOverlap from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/dark_nav_with_overlap";
import WithOverlapRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/dark_nav_with_overlap.jsx?raw";

// 06. Brand nav with overlap
import BrandNavWithOverlap from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/brand_nav_with_overlap";
import BrandNavWithOverlapRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/brand_nav_with_overlap.jsx?raw";

// 07. Branded nav with lighter page header
import BrandedNavLighterHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/branded_nav_with_white_page_header";
import BrandedNavLighterHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/branded_nav_with_white_page_header.jsx?raw";

// 08. With compact lighter page header
import WithCompactLighterHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/dark_nav_with_compact_white_page_header";
import WithCompactLighterHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/dark_nav_with_compact_white_page_header.jsx?raw";

// 09. Two-row navigation with overlap
import TwoRowNavWithOverlap from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/two_row_navigation_with_overlap";
import TwoRowNavWithOverlapRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/stacked/two_row_navigation_with_overlap.jsx?raw";

const BentoGridsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Branded nav with white page header",
      component: <WithLighterPageHeader />,
      raw: WithLighterPageHeaderRaw,
    },
    {
      id: "02",
      name: "With bottom border",
      component: <WithBottomBorder />,
      raw: WithBottomBorderRaw,
    },
    {
      id: "03",
      name: "On subtle background",
      component: <OnSubtleBackground />,
      raw: OnSubtleBackgroundRaw,
    },
    {
      id: "04",
      name: "Branded nav with compact lighter page header",
      component: <BrandedNavCompactLighter />,
      raw: BrandedNavCompactLighterRaw,
    },
    {
      id: "05",
      name: "With overlap",
      component: <WithOverlap />,
      raw: WithOverlapRaw,
    },
    {
      id: "06",
      name: "Brand nav with overlap",
      component: <BrandNavWithOverlap />,
      raw: BrandNavWithOverlapRaw,
    },
    {
      id: "07",
      name: "Branded nav with lighter page header",
      component: <BrandedNavLighterHeader />,
      raw: BrandedNavLighterHeaderRaw,
    },
    {
      id: "08",
      name: "With compact lighter page header",
      component: <WithCompactLighterHeader />,
      raw: WithCompactLighterHeaderRaw,
    },
    {
      id: "09",
      name: "Two-row navigation with overlap",
      component: <TwoRowNavWithOverlap />,
      raw: TwoRowNavWithOverlapRaw,
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section key={layout.id}>
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            {layout.id}. {layout.name}
          </h2>
          <PreviewWrapper name={layout.name} code={layout.raw}>
            {layout.component}
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default BentoGridsDemoPage;
