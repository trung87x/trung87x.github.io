import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/component-plus/application-ui/elements/dropdowns/simple";
import SimpleRaw from "@/component-plus/application-ui/elements/dropdowns/simple.jsx?raw";

// 02. With dividers
import WithDividers from "@/component-plus/application-ui/elements/dropdowns/with_dividers";
import WithDividersRaw from "@/component-plus/application-ui/elements/dropdowns/with_dividers.jsx?raw";

// 03. With icons
import WithIcons from "@/component-plus/application-ui/elements/dropdowns/with_icons";
import WithIconsRaw from "@/component-plus/application-ui/elements/dropdowns/with_icons.jsx?raw";

// 04. With minimal menu icon
import WithMinimalMenuIcon from "@/component-plus/application-ui/elements/dropdowns/with_minimal_menu_icon";
import WithMinimalMenuIconRaw from "@/component-plus/application-ui/elements/dropdowns/with_minimal_menu_icon.jsx?raw";

// 05. With simple header
import WithSimpleHeader from "@/component-plus/application-ui/elements/dropdowns/with_simple_header";
import WithSimpleHeaderRaw from "@/component-plus/application-ui/elements/dropdowns/with_simple_header.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const DropdownsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "With dividers",
      component: <WithDividers />,
      raw: WithDividersRaw,
    },
    {
      id: "03",
      name: "With icons",
      component: <WithIcons />,
      raw: WithIconsRaw,
    },
    {
      id: "04",
      name: "With minimal menu icon",
      component: <WithMinimalMenuIcon />,
      raw: WithMinimalMenuIconRaw,
    },
    {
      id: "05",
      name: "With simple header",
      component: <WithSimpleHeader />,
      raw: WithSimpleHeaderRaw,
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

export default DropdownsDemoPage;
