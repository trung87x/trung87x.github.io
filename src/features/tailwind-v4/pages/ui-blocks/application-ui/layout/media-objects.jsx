import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/basic.jsx?raw";

// 02. Aligned to center
import AlignedToCenter from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/aligned_to_center";
import AlignedToCenterRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/aligned_to_center.jsx?raw";

// 03. Aligned to bottom
import AlignedToBottom from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/aligned_to_bottom";
import AlignedToBottomRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/aligned_to_bottom.jsx?raw";

// 04. Stretched to fit
import StretchedToFit from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/stretched_to_fit";
import StretchedToFitRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/stretched_to_fit.jsx?raw";

// 05. Media on right
import MediaOnRight from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/media_on_right";
import MediaOnRightRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/media_on_right.jsx?raw";

// 06. Basic responsive
import BasicResponsive from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/basic_responsive";
import BasicResponsiveRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/basic_responsive.jsx?raw";

// 07. Wide responsive
import WideResponsive from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/wide_responsive";
import WideResponsiveRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/wide_responsive.jsx?raw";

// 08. Nested
import Nested from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/nested";
import NestedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/media-objects/nested.jsx?raw";

const MediaObjectsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: BasicRaw,
    },
    {
      id: "02",
      name: "Aligned to center",
      component: <AlignedToCenter />,
      raw: AlignedToCenterRaw,
    },
    {
      id: "03",
      name: "Aligned to bottom",
      component: <AlignedToBottom />,
      raw: AlignedToBottomRaw,
    },
    {
      id: "04",
      name: "Stretched to fit",
      component: <StretchedToFit />,
      raw: StretchedToFitRaw,
    },
    {
      id: "05",
      name: "Media on right",
      component: <MediaOnRight />,
      raw: MediaOnRightRaw,
    },
    {
      id: "06",
      name: "Basic responsive",
      component: <BasicResponsive />,
      raw: BasicResponsiveRaw,
    },
    {
      id: "07",
      name: "Wide responsive",
      component: <WideResponsive />,
      raw: WideResponsiveRaw,
    },
    {
      id: "08",
      name: "Nested",
      component: <Nested />,
      raw: NestedRaw,
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

export default MediaObjectsDemoPage;
