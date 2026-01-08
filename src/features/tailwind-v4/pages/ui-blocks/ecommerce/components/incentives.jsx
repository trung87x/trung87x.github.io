import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. 3-column with illustrations and split header
import ThreeColIllustrationsSplitHeader from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_illustrations_and_split_header";
import ThreeColIllustrationsSplitHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_illustrations_and_split_header.jsx?raw";

// 02. 4-column with illustrations
import FourColIllustrations from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/4_column_with_illustrations";
import FourColIllustrationsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/4_column_with_illustrations.jsx?raw";

// 03. 3-column with illustrations and header
import ThreeColIllustrationsHeader from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_illustrations_and_header";
import ThreeColIllustrationsHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_illustrations_and_header.jsx?raw";

// 04. 3-column with illustrations and centered text
import ThreeColIllustrationsCenteredText from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_illustrations_and_centered_text";
import ThreeColIllustrationsCenteredTextRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_illustrations_and_centered_text.jsx?raw";

// 05. 3-column with illustrations and heading
import ThreeColIllustrationsHeading from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_illustrations_and_heading";
import ThreeColIllustrationsHeadingRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_illustrations_and_heading.jsx?raw";

// 06. 2x2 grid with illustrations
import TwoByTwoGridIllustrations from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/2x2_grid_with_illustrations";
import TwoByTwoGridIllustrationsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/2x2_grid_with_illustrations.jsx?raw";

// 07. 3-column with icons and supporting text
import ThreeColIconsSupportingText from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_icons_and_supporting_text";
import ThreeColIconsSupportingTextRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_icons_and_supporting_text.jsx?raw";

// 08. 3-column with icons
import ThreeColIcons from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_icons";
import ThreeColIconsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/incentives/3_column_with_icons.jsx?raw";

const IncentivesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "3-column with illustrations and split header",
      component: <ThreeColIllustrationsSplitHeader />,
      raw: ThreeColIllustrationsSplitHeaderRaw,
    },
    {
      id: "02",
      name: "4-column with illustrations",
      component: <FourColIllustrations />,
      raw: FourColIllustrationsRaw,
    },
    {
      id: "03",
      name: "3-column with illustrations and header",
      component: <ThreeColIllustrationsHeader />,
      raw: ThreeColIllustrationsHeaderRaw,
    },
    {
      id: "04",
      name: "3-column with illustrations and centered text",
      component: <ThreeColIllustrationsCenteredText />,
      raw: ThreeColIllustrationsCenteredTextRaw,
    },
    {
      id: "05",
      name: "3-column with illustrations and heading",
      component: <ThreeColIllustrationsHeading />,
      raw: ThreeColIllustrationsHeadingRaw,
    },
    {
      id: "06",
      name: "2x2 grid with illustrations",
      component: <TwoByTwoGridIllustrations />,
      raw: TwoByTwoGridIllustrationsRaw,
    },
    {
      id: "07",
      name: "3-column with icons and supporting text",
      component: <ThreeColIconsSupportingText />,
      raw: ThreeColIconsSupportingTextRaw,
    },
    {
      id: "08",
      name: "3-column with icons",
      component: <ThreeColIcons />,
      raw: ThreeColIconsRaw,
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

export default IncentivesDemoPage;
