import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With related products
import WithRelatedProducts from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/shopping-cart-pages/with_related_products";
import WithRelatedProductsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/shopping-cart-pages/with_related_products.jsx?raw";

// 02. Simple with policy grid
import SimpleWithPolicyGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/shopping-cart-pages/simple_with_policy_grid";
import SimpleWithPolicyGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/shopping-cart-pages/simple_with_policy_grid.jsx?raw";

// 03. With policy grid and extended summary
import WithPolicyGridAndExtendedSummary from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/shopping-cart-pages/with_policy_grid_and_extended_summary";
import WithPolicyGridAndExtendedSummaryRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/shopping-cart-pages/with_policy_grid_and_extended_summary.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ShoppingCartPagesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With related products",
      component: <WithRelatedProducts />,
      raw: WithRelatedProductsRaw,
    },
    {
      id: "02",
      name: "Simple with policy grid",
      component: <SimpleWithPolicyGrid />,
      raw: SimpleWithPolicyGridRaw,
    },
    {
      id: "03",
      name: "With policy grid and extended summary",
      component: <WithPolicyGridAndExtendedSummary />,
      raw: WithPolicyGridAndExtendedSummaryRaw,
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

export default ShoppingCartPagesDemoPage;
