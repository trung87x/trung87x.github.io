import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Single step with order summary
import SingleStepWithOrderSummary from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/single_step_with_order_summary";
import SingleStepWithOrderSummaryRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/single_step_with_order_summary.jsx?raw";

// 02. With mobile order summary overlay
import WithMobileOrderSummaryOverlay from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/with_mobile_order_summary_overlay";
import WithMobileOrderSummaryOverlayRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/with_mobile_order_summary_overlay.jsx?raw";

// 03. Multi-step
import MultiStep from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/multi_step";
import MultiStepRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/multi_step.jsx?raw";

// 04. With order summary sidebar
import WithOrderSummarySidebar from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/with_order_summary_sidebar";
import WithOrderSummarySidebarRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/with_order_summary_sidebar.jsx?raw";

// 05. Split with order summary
import SplitWithOrderSummary from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/split_with_order_summary";
import SplitWithOrderSummaryRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/checkout-forms/split_with_order_summary.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const CheckoutFormsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Single step with order summary",
      component: <SingleStepWithOrderSummary />,
      raw: SingleStepWithOrderSummaryRaw,
    },
    {
      id: "02",
      name: "With mobile order summary overlay",
      component: <WithMobileOrderSummaryOverlay />,
      raw: WithMobileOrderSummaryOverlayRaw,
    },
    {
      id: "03",
      name: "Multi-step",
      component: <MultiStep />,
      raw: MultiStepRaw,
    },
    {
      id: "04",
      name: "With order summary sidebar",
      component: <WithOrderSummarySidebar />,
      raw: WithOrderSummarySidebarRaw,
    },
    {
      id: "05",
      name: "Split with order summary",
      component: <SplitWithOrderSummary />,
      raw: SplitWithOrderSummaryRaw,
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

export default CheckoutFormsDemoPage;
