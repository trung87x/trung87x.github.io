import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Full-width three-column
import FullWidthThreeColumn from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/full_width_three_column";
import FullWidthThreeColumnRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/full_width_three_column.jsx?raw";

// 02. Full-width secondary column on right
import FullWidthSecondaryRight from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/full_width_secondary_column_on_right";
import FullWidthSecondaryRightRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/full_width_secondary_column_on_right.jsx?raw";

// 03. Constrained three column
import ConstrainedThreeColumn from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/constrained_three_column";
import ConstrainedThreeColumnRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/constrained_three_column.jsx?raw";

// 04. Constrained with sticky columns
import ConstrainedStickyColumns from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/constrained_with_sticky_columns";
import ConstrainedStickyColumnsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/constrained_with_sticky_columns.jsx?raw";

// 05. Full-width with narrow sidebar
import FullWidthNarrowSidebar from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/full_width_with_narrow_sidebar";
import FullWidthNarrowSidebarRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/full_width_with_narrow_sidebar.jsx?raw";

// 06. Full-width with narrow sidebar and header
import FullWidthNarrowSidebarHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/full_width_with_narrow_sidebar_and_header";
import FullWidthNarrowSidebarHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/multi-column/full_width_with_narrow_sidebar_and_header.jsx?raw";

const MultiColumnLayoutsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Full-width three-column",
      component: <FullWidthThreeColumn />,
      raw: FullWidthThreeColumnRaw,
    },
    {
      id: "02",
      name: "Full-width secondary column on right",
      component: <FullWidthSecondaryRight />,
      raw: FullWidthSecondaryRightRaw,
    },
    {
      id: "03",
      name: "Constrained three column",
      component: <ConstrainedThreeColumn />,
      raw: ConstrainedThreeColumnRaw,
    },
    {
      id: "04",
      name: "Constrained with sticky columns",
      component: <ConstrainedStickyColumns />,
      raw: ConstrainedStickyColumnsRaw,
    },
    {
      id: "05",
      name: "Full-width with narrow sidebar",
      component: <FullWidthNarrowSidebar />,
      raw: FullWidthNarrowSidebarRaw,
    },
    {
      id: "06",
      name: "Full-width with narrow sidebar and header",
      component: <FullWidthNarrowSidebarHeader />,
      raw: FullWidthNarrowSidebarHeaderRaw,
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

export default MultiColumnLayoutsDemoPage;
