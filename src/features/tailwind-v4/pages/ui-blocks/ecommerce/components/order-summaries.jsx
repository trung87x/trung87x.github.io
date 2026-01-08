import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With split image
import WithSplitImage from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-summaries/with_split_image";
import WithSplitImageRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-summaries/with_split_image.jsx?raw";

// 02. With progress bars
import WithProgressBars from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-summaries/with_progress_bars";
import WithProgressBarsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-summaries/with_progress_bars.jsx?raw";

// 03. With large images and progress bars
import WithLargeImagesAndProgressBars from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-summaries/with_large_images_and_progress_bars";
import WithLargeImagesAndProgressBarsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-summaries/with_large_images_and_progress_bars.jsx?raw";

// 04. Simple with full order details
import SimpleWithFullOrderDetails from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-summaries/simple_with_full_order_details";
import SimpleWithFullOrderDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-summaries/simple_with_full_order_details.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const OrderSummariesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With split image",
      component: <WithSplitImage />,
      raw: WithSplitImageRaw,
    },
    {
      id: "02",
      name: "With progress bars",
      component: <WithProgressBars />,
      raw: WithProgressBarsRaw,
    },
    {
      id: "03",
      name: "With large images and progress bars",
      component: <WithLargeImagesAndProgressBars />,
      raw: WithLargeImagesAndProgressBarsRaw,
    },
    {
      id: "04",
      name: "Simple with full order details",
      component: <SimpleWithFullOrderDetails />,
      raw: SimpleWithFullOrderDetailsRaw,
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

export default OrderSummariesDemoPage;
