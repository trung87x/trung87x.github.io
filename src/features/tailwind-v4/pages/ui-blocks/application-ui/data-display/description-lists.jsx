import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Left-aligned
import LeftAligned from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/left_aligned";
import LeftAlignedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/left_aligned.jsx?raw";

// 02. Left-aligned in card
import LeftAlignedInCard from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/left_aligned_in_card";
import LeftAlignedInCardRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/left_aligned_in_card.jsx?raw";

// 03. Left-aligned striped
import LeftAlignedStriped from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/left_aligned_striped";
import LeftAlignedStripedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/left_aligned_striped.jsx?raw";

// 04. Two-column
import TwoColumn from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/two_column";
import TwoColumnRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/two_column.jsx?raw";

// 05. Left-aligned with inline actions
import LeftAlignedWithInlineActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/left_aligned_with_inline_actions";
import LeftAlignedWithInlineActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/left_aligned_with_inline_actions.jsx?raw";

// 06. Narrow with hidden labels
import NarrowWithHiddenLabels from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/narrow_with_hidden_labels";
import NarrowWithHiddenLabelsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/description-lists/narrow_with_hidden_labels.jsx?raw";

const DescriptionListsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Left-aligned",
      component: <LeftAligned />,
      raw: LeftAlignedRaw,
    },
    {
      id: "02",
      name: "Left-aligned in card",
      component: <LeftAlignedInCard />,
      raw: LeftAlignedInCardRaw,
    },
    {
      id: "03",
      name: "Left-aligned striped",
      component: <LeftAlignedStriped />,
      raw: LeftAlignedStripedRaw,
    },
    {
      id: "04",
      name: "Two-column",
      component: <TwoColumn />,
      raw: TwoColumnRaw,
    },
    {
      id: "05",
      name: "Left-aligned with inline actions",
      component: <LeftAlignedWithInlineActions />,
      raw: LeftAlignedWithInlineActionsRaw,
    },
    {
      id: "06",
      name: "Narrow with hidden labels",
      component: <NarrowWithHiddenLabels />,
      raw: NarrowWithHiddenLabelsRaw,
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

export default DescriptionListsDemoPage;
