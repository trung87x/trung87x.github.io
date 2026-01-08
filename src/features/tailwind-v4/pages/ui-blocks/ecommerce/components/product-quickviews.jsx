import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With color and size selector
import WithColorAndSizeSelector from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-quickviews/with_color_and_size_selector";
import WithColorAndSizeSelectorRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-quickviews/with_color_and_size_selector.jsx?raw";

// 02. With color selector, size selector, and details link
import WithColorSizeSelectorAndDetailsLink from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-quickviews/with_color_selector__size_selector__and_details_link";
import WithColorSizeSelectorAndDetailsLinkRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-quickviews/with_color_selector__size_selector__and_details_link.jsx?raw";

// 03. With large size selector
import WithLargeSizeSelector from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-quickviews/with_large_size_selector";
import WithLargeSizeSelectorRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-quickviews/with_large_size_selector.jsx?raw";

// 04. With color selector and description
import WithColorSelectorAndDescription from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-quickviews/with_color_selector_and_description";
import WithColorSelectorAndDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/product-quickviews/with_color_selector_and_description.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ProductListsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With color and size selector",
      component: <WithColorAndSizeSelector />,
      raw: WithColorAndSizeSelectorRaw,
    },
    {
      id: "02",
      name: "With color selector, size selector, and details link",
      component: <WithColorSizeSelectorAndDetailsLink />,
      raw: WithColorSizeSelectorAndDetailsLinkRaw,
    },
    {
      id: "03",
      name: "With large size selector",
      component: <WithLargeSizeSelector />,
      raw: WithLargeSizeSelectorRaw,
    },
    {
      id: "04",
      name: "With color selector and description",
      component: <WithColorSelectorAndDescription />,
      raw: WithColorSelectorAndDescriptionRaw,
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

export default ProductListsDemoPage;
