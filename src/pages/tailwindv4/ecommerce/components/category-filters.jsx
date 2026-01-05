import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With inline actions and expandable sidebar filters
import WithInlineActionsAndExpandableSidebarFilters from "@/component-plus/ecommerce/components/category-filters/with_inline_actions_and_expandable_sidebar_filters";
import WithInlineActionsAndExpandableSidebarFiltersRaw from "@/component-plus/ecommerce/components/category-filters/with_inline_actions_and_expandable_sidebar_filters.jsx?raw";

// 02. With centered text and dropdown product filters
import WithCenteredTextAndDropdownProductFilters from "@/component-plus/ecommerce/components/category-filters/with_centered_text_and_dropdown_product_filters";
import WithCenteredTextAndDropdownProductFiltersRaw from "@/component-plus/ecommerce/components/category-filters/with_centered_text_and_dropdown_product_filters.jsx?raw";

// 03. With dropdown product filters
import WithDropdownProductFilters from "@/component-plus/ecommerce/components/category-filters/with_dropdown_product_filters";
import WithDropdownProductFiltersRaw from "@/component-plus/ecommerce/components/category-filters/with_dropdown_product_filters.jsx?raw";

// 04. With expandable product filter panel
import WithExpandableProductFilterPanel from "@/component-plus/ecommerce/components/category-filters/with_expandable_product_filter_panel";
import WithExpandableProductFilterPanelRaw from "@/component-plus/ecommerce/components/category-filters/with_expandable_product_filter_panel.jsx?raw";

// 05. Sidebar filters
import SidebarFilters from "@/component-plus/ecommerce/components/category-filters/sidebar_filters";
import SidebarFiltersRaw from "@/component-plus/ecommerce/components/category-filters/sidebar_filters.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const CategoryFiltersDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With inline actions and expandable sidebar filters",
      component: <WithInlineActionsAndExpandableSidebarFilters />,
      raw: WithInlineActionsAndExpandableSidebarFiltersRaw,
    },
    {
      id: "02",
      name: "With centered text and dropdown product filters",
      component: <WithCenteredTextAndDropdownProductFilters />,
      raw: WithCenteredTextAndDropdownProductFiltersRaw,
    },
    {
      id: "03",
      name: "With dropdown product filters",
      component: <WithDropdownProductFilters />,
      raw: WithDropdownProductFiltersRaw,
    },
    {
      id: "04",
      name: "With expandable product filter panel",
      component: <WithExpandableProductFilterPanel />,
      raw: WithExpandableProductFilterPanelRaw,
    },
    {
      id: "05",
      name: "Sidebar filters",
      component: <SidebarFilters />,
      raw: SidebarFiltersRaw,
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

export default CategoryFiltersDemoPage;
