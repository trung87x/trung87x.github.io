import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Full-width on mobile, constrained with padded content above
import FullWidthMobileConstrained from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/full_width_on_mobile__constrained_with_padded_content_above";
import FullWidthMobileConstrainedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/full_width_on_mobile__constrained_with_padded_content_above.jsx?raw";

// 02. Constrained with padded content
import ConstrainedWithPaddedContent from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/constrained_with_padded_content";
import ConstrainedWithPaddedContentRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/constrained_with_padded_content.jsx?raw";

// 03. Full-width on mobile, constrained to breakpoint with padded content above mobile
import FullWidthMobileConstrainedToBreakpoint from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobile";
import FullWidthMobileConstrainedToBreakpointRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobile.jsx?raw";

// 04. Constrained to breakpoint with padded content
import ConstrainedToBreakpointWithPaddedContent from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/constrained_to_breakpoint_with_padded_content";
import ConstrainedToBreakpointWithPaddedContentRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/constrained_to_breakpoint_with_padded_content.jsx?raw";

// 05. Narrow constrained with padded content
import NarrowConstrainedWithPaddedContent from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/narrow_constrained_with_padded_content";
import NarrowConstrainedWithPaddedContentRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/containers/narrow_constrained_with_padded_content.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ContainersDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Full-width on mobile, constrained with padded content above",
      component: <FullWidthMobileConstrained />,
      raw: FullWidthMobileConstrainedRaw,
    },
    {
      id: "02",
      name: "Constrained with padded content",
      component: <ConstrainedWithPaddedContent />,
      raw: ConstrainedWithPaddedContentRaw,
    },
    {
      id: "03",
      name: "Full-width on mobile, constrained to breakpoint with padded content above mobile",
      component: <FullWidthMobileConstrainedToBreakpoint />,
      raw: FullWidthMobileConstrainedToBreakpointRaw,
    },
    {
      id: "04",
      name: "Constrained to breakpoint with padded content",
      component: <ConstrainedToBreakpointWithPaddedContent />,
      raw: ConstrainedToBreakpointWithPaddedContentRaw,
    },
    {
      id: "05",
      name: "Narrow constrained with padded content",
      component: <NarrowConstrainedWithPaddedContent />,
      raw: NarrowConstrainedWithPaddedContentRaw,
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

export default ContainersDemoPage;
