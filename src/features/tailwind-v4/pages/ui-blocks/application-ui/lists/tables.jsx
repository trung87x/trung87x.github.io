import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/components/ui-blocks/application-ui/lists/tables/simple";
import SimpleRaw from "@/components/ui-blocks/application-ui/lists/tables/simple.jsx?raw";

// 02. Simple in card
import SimpleInCard from "@/components/ui-blocks/application-ui/lists/tables/simple_in_card";
import SimpleInCardRaw from "@/components/ui-blocks/application-ui/lists/tables/simple_in_card.jsx?raw";

// 03. Full width
import FullWidth from "@/components/ui-blocks/application-ui/lists/tables/full_width";
import FullWidthRaw from "@/components/ui-blocks/application-ui/lists/tables/full_width.jsx?raw";

// 04. Full width with constrained content
import FullWidthConstrained from "@/components/ui-blocks/application-ui/lists/tables/full_width_with_constrained_content";
import FullWidthConstrainedRaw from "@/components/ui-blocks/application-ui/lists/tables/full_width_with_constrained_content.jsx?raw";

// 05. With striped rows
import WithStripedRows from "@/components/ui-blocks/application-ui/lists/tables/with_striped_rows";
import WithStripedRowsRaw from "@/components/ui-blocks/application-ui/lists/tables/with_striped_rows.jsx?raw";

// 06. With uppercase headings
import WithUppercaseHeadings from "@/components/ui-blocks/application-ui/lists/tables/with_uppercase_headings";
import WithUppercaseHeadingsRaw from "@/components/ui-blocks/application-ui/lists/tables/with_uppercase_headings.jsx?raw";

// 07. With stacked columns on mobile
import WithStackedColumnsMobile from "@/components/ui-blocks/application-ui/lists/tables/with_stacked_columns_on_mobile";
import WithStackedColumnsMobileRaw from "@/components/ui-blocks/application-ui/lists/tables/with_stacked_columns_on_mobile.jsx?raw";

// 08. With hidden columns on mobile
import WithHiddenColumnsMobile from "@/components/ui-blocks/application-ui/lists/tables/with_hidden_columns_on_mobile";
import WithHiddenColumnsMobileRaw from "@/components/ui-blocks/application-ui/lists/tables/with_hidden_columns_on_mobile.jsx?raw";

// 09. With avatars and multi-line content
import WithAvatarsMultiLine from "@/components/ui-blocks/application-ui/lists/tables/with_avatars_and_multi_line_content";
import WithAvatarsMultiLineRaw from "@/components/ui-blocks/application-ui/lists/tables/with_avatars_and_multi_line_content.jsx?raw";

// 10. With sticky header
import WithStickyHeader from "@/components/ui-blocks/application-ui/lists/tables/with_sticky_header";
import WithStickyHeaderRaw from "@/components/ui-blocks/application-ui/lists/tables/with_sticky_header.jsx?raw";

// 11. With vertical lines
import WithVerticalLines from "@/components/ui-blocks/application-ui/lists/tables/with_vertical_lines";
import WithVerticalLinesRaw from "@/components/ui-blocks/application-ui/lists/tables/with_vertical_lines.jsx?raw";

// 12. With condensed content
import WithCondensedContent from "@/components/ui-blocks/application-ui/lists/tables/with_condensed_content";
import WithCondensedContentRaw from "@/components/ui-blocks/application-ui/lists/tables/with_condensed_content.jsx?raw";

// 13. With sortable headings
import WithSortableHeadings from "@/components/ui-blocks/application-ui/lists/tables/with_sortable_headings";
import WithSortableHeadingsRaw from "@/components/ui-blocks/application-ui/lists/tables/with_sortable_headings.jsx?raw";

// 14. With grouped rows
import WithGroupedRows from "@/components/ui-blocks/application-ui/lists/tables/with_grouped_rows";
import WithGroupedRowsRaw from "@/components/ui-blocks/application-ui/lists/tables/with_grouped_rows.jsx?raw";

// 15. With summary rows
import WithSummaryRows from "@/components/ui-blocks/application-ui/lists/tables/with_summary_rows";
import WithSummaryRowsRaw from "@/components/ui-blocks/application-ui/lists/tables/with_summary_rows.jsx?raw";

// 16. With border
import WithBorder from "@/components/ui-blocks/application-ui/lists/tables/with_border";
import WithBorderRaw from "@/components/ui-blocks/application-ui/lists/tables/with_border.jsx?raw";

// 17. With checkboxes
import WithCheckboxes from "@/components/ui-blocks/application-ui/lists/tables/with_checkboxes";
import WithCheckboxesRaw from "@/components/ui-blocks/application-ui/lists/tables/with_checkboxes.jsx?raw";

// 18. With hidden headings
import WithHiddenHeadings from "@/components/ui-blocks/application-ui/lists/tables/with_hidden_headings";
import WithHiddenHeadingsRaw from "@/components/ui-blocks/application-ui/lists/tables/with_hidden_headings.jsx?raw";

// 19. Full width with avatars
import FullWidthWithAvatars from "@/components/ui-blocks/application-ui/lists/tables/full_width_with_avatars_on_dark";
import FullWidthWithAvatarsRaw from "@/components/ui-blocks/application-ui/lists/tables/full_width_with_avatars_on_dark.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const TablesDemoPage = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, raw: SimpleRaw },
    {
      id: "02",
      name: "Simple in card",
      component: <SimpleInCard />,
      raw: SimpleInCardRaw,
    },
    {
      id: "03",
      name: "Full width",
      component: <FullWidth />,
      raw: FullWidthRaw,
    },
    {
      id: "04",
      name: "Full width with constrained content",
      component: <FullWidthConstrained />,
      raw: FullWidthConstrainedRaw,
    },
    {
      id: "05",
      name: "With striped rows",
      component: <WithStripedRows />,
      raw: WithStripedRowsRaw,
    },
    {
      id: "06",
      name: "With uppercase headings",
      component: <WithUppercaseHeadings />,
      raw: WithUppercaseHeadingsRaw,
    },
    {
      id: "07",
      name: "With stacked columns on mobile",
      component: <WithStackedColumnsMobile />,
      raw: WithStackedColumnsMobileRaw,
    },
    {
      id: "08",
      name: "With hidden columns on mobile",
      component: <WithHiddenColumnsMobile />,
      raw: WithHiddenColumnsMobileRaw,
    },
    {
      id: "09",
      name: "With avatars and multi-line content",
      component: <WithAvatarsMultiLine />,
      raw: WithAvatarsMultiLineRaw,
    },
    {
      id: "10",
      name: "With sticky header",
      component: <WithStickyHeader />,
      raw: WithStickyHeaderRaw,
    },
    {
      id: "11",
      name: "With vertical lines",
      component: <WithVerticalLines />,
      raw: WithVerticalLinesRaw,
    },
    {
      id: "12",
      name: "With condensed content",
      component: <WithCondensedContent />,
      raw: WithCondensedContentRaw,
    },
    {
      id: "13",
      name: "With sortable headings",
      component: <WithSortableHeadings />,
      raw: WithSortableHeadingsRaw,
    },
    {
      id: "14",
      name: "With grouped rows",
      component: <WithGroupedRows />,
      raw: WithGroupedRowsRaw,
    },
    {
      id: "15",
      name: "With summary rows",
      component: <WithSummaryRows />,
      raw: WithSummaryRowsRaw,
    },
    {
      id: "16",
      name: "With border",
      component: <WithBorder />,
      raw: WithBorderRaw,
    },
    {
      id: "17",
      name: "With checkboxes",
      component: <WithCheckboxes />,
      raw: WithCheckboxesRaw,
    },
    {
      id: "18",
      name: "With hidden headings",
      component: <WithHiddenHeadings />,
      raw: WithHiddenHeadingsRaw,
    },
    {
      id: "19",
      name: "Full width with avatars",
      component: <FullWidthWithAvatars />,
      raw: FullWidthWithAvatarsRaw,
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

export default TablesDemoPage;
