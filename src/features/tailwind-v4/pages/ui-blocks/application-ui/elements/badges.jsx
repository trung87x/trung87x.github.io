import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With border
import WithBorder from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/with_border";
import WithBorderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/with_border.jsx?raw";

// 02. With border and dot
import WithBorderAndDot from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/with_border_and_dot";
import WithBorderAndDotRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/with_border_and_dot.jsx?raw";

// 03. Pill with border
import PillWithBorder from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/pill_with_border";
import PillWithBorderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/pill_with_border.jsx?raw";

// 04. Pill with border and dot
import PillWithBorderAndDot from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/pill_with_border_and_dot";
import PillWithBorderAndDotRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/pill_with_border_and_dot.jsx?raw";

// 05. With border and remove button
import WithBorderAndRemoveButton from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/with_border_and_remove_button";
import WithBorderAndRemoveButtonRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/with_border_and_remove_button.jsx?raw";

// 06. Flat
import Flat from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat";
import FlatRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat.jsx?raw";

// 07. Flat pill
import FlatPill from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat_pill";
import FlatPillRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat_pill.jsx?raw";

// 08. Flat with dot
import FlatWithDot from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat_with_dot";
import FlatWithDotRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat_with_dot.jsx?raw";

// 09. Flat pill with dot
import FlatPillWithDot from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat_pill_with_dot";
import FlatPillWithDotRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat_pill_with_dot.jsx?raw";

// 10. Flat with remove button
import FlatWithRemoveButton from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat_with_remove_button";
import FlatWithRemoveButtonRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/flat_with_remove_button.jsx?raw";

// 11. Small with border
import SmallWithBorder from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_with_border";
import SmallWithBorderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_with_border.jsx?raw";

// 12. Small flat
import SmallFlat from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_flat";
import SmallFlatRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_flat.jsx?raw";

// 13. Small pill with border
import SmallPillWithBorder from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_pill_with_border";
import SmallPillWithBorderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_pill_with_border.jsx?raw";

// 14. Small flat pill
import SmallFlatPill from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_flat_pill";
import SmallFlatPillRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_flat_pill.jsx?raw";

// 15. Small flat with dot
import SmallFlatWithDot from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_flat_with_dot";
import SmallFlatWithDotRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_flat_with_dot.jsx?raw";

// 16. Small flat pill with dot
import SmallFlatPillWithDot from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_flat_pill_with_dot";
import SmallFlatPillWithDotRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/badges/small_flat_pill_with_dot.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const BadgesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With border",
      component: <WithBorder />,
      raw: WithBorderRaw,
    },
    {
      id: "02",
      name: "With border and dot",
      component: <WithBorderAndDot />,
      raw: WithBorderAndDotRaw,
    },
    {
      id: "03",
      name: "Pill with border",
      component: <PillWithBorder />,
      raw: PillWithBorderRaw,
    },
    {
      id: "04",
      name: "Pill with border and dot",
      component: <PillWithBorderAndDot />,
      raw: PillWithBorderAndDotRaw,
    },
    {
      id: "05",
      name: "With border and remove button",
      component: <WithBorderAndRemoveButton />,
      raw: WithBorderAndRemoveButtonRaw,
    },
    { id: "06", name: "Flat", component: <Flat />, raw: FlatRaw },
    { id: "07", name: "Flat pill", component: <FlatPill />, raw: FlatPillRaw },
    {
      id: "08",
      name: "Flat with dot",
      component: <FlatWithDot />,
      raw: FlatWithDotRaw,
    },
    {
      id: "09",
      name: "Flat pill with dot",
      component: <FlatPillWithDot />,
      raw: FlatPillWithDotRaw,
    },
    {
      id: "10",
      name: "Flat with remove button",
      component: <FlatWithRemoveButton />,
      raw: FlatWithRemoveButtonRaw,
    },
    {
      id: "11",
      name: "Small with border",
      component: <SmallWithBorder />,
      raw: SmallWithBorderRaw,
    },
    {
      id: "12",
      name: "Small flat",
      component: <SmallFlat />,
      raw: SmallFlatRaw,
    },
    {
      id: "13",
      name: "Small pill with border",
      component: <SmallPillWithBorder />,
      raw: SmallPillWithBorderRaw,
    },
    {
      id: "14",
      name: "Small flat pill",
      component: <SmallFlatPill />,
      raw: SmallFlatPillRaw,
    },
    {
      id: "15",
      name: "Small flat with dot",
      component: <SmallFlatWithDot />,
      raw: SmallFlatWithDotRaw,
    },
    {
      id: "16",
      name: "Small flat pill with dot",
      component: <SmallFlatPillWithDot />,
      raw: SmallFlatPillWithDotRaw,
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

export default BadgesDemoPage;
