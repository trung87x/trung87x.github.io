import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/basic.jsx?raw";

// 02. Icon only
import IconOnly from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/icon_only";
import IconOnlyRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/icon_only.jsx?raw";

// 03. With stat
import WithStat from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/with_stat";
import WithStatRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/with_stat.jsx?raw";

// 04. With dropdown
import WithDropdown from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/with_dropdown";
import WithDropdownRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/with_dropdown.jsx?raw";

// 05. With checkbox and dropdown
import WithCheckboxAndDropdown from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/with_checkbox_and_dropdown";
import WithCheckboxAndDropdownRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/button-groups/with_checkbox_and_dropdown.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ButtonGroupsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: BasicRaw,
    },
    {
      id: "02",
      name: "Icon only",
      component: <IconOnly />,
      raw: IconOnlyRaw,
    },
    {
      id: "03",
      name: "With stat",
      component: <WithStat />,
      raw: WithStatRaw,
    },
    {
      id: "04",
      name: "With dropdown",
      component: <WithDropdown />,
      raw: WithDropdownRaw,
    },
    {
      id: "05",
      name: "With checkbox and dropdown",
      component: <WithCheckboxAndDropdown />,
      raw: WithCheckboxAndDropdownRaw,
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

export default ButtonGroupsDemoPage;
