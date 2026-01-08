import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With progress bars
import WithProgressBars from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/order-detail-pages/with_progress_bars";
import WithProgressBarsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/order-detail-pages/with_progress_bars.jsx?raw";

// 02. With large images and progress bars
import WithLargeImagesAndProgressBars from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/order-detail-pages/with_large_images_and_progress_bars";
import WithLargeImagesAndProgressBarsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/order-detail-pages/with_large_images_and_progress_bars.jsx?raw";

// 03. Simple with full order details
import SimpleWithFullOrderDetails from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/order-detail-pages/simple_with_full_order_details";
import SimpleWithFullOrderDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/page-examples/order-detail-pages/simple_with_full_order_details.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const OrderDetailPagesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With progress bars",
      component: <WithProgressBars />,
      raw: WithProgressBarsRaw,
    },
    {
      id: "02",
      name: "With large images and progress bars",
      component: <WithLargeImagesAndProgressBars />,
      raw: WithLargeImagesAndProgressBarsRaw,
    },
    {
      id: "03",
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

export default OrderDetailPagesDemoPage;
