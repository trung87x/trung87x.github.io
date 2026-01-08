import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/comboboxes/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/comboboxes/simple.jsx?raw";

// 02. With status indicator
import WithStatusIndicator from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/comboboxes/with_status_indicator";
import WithStatusIndicatorRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/comboboxes/with_status_indicator.jsx?raw";

// 03. With image
import WithImage from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/comboboxes/with_image";
import WithImageRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/comboboxes/with_image.jsx?raw";

// 04. With secondary text
import WithSecondaryText from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/comboboxes/with_secondary_text";
import WithSecondaryTextRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/comboboxes/with_secondary_text.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ActionPanelsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "With status indicator",
      component: <WithStatusIndicator />,
      raw: WithStatusIndicatorRaw,
    },
    {
      id: "03",
      name: "With image",
      component: <WithImage />,
      raw: WithImageRaw,
    },
    {
      id: "04",
      name: "With secondary text",
      component: <WithSecondaryText />,
      raw: WithSecondaryTextRaw,
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

export default ActionPanelsDemoPage;
