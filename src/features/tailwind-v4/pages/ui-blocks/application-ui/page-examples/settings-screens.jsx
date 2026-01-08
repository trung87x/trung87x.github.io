import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With sidebar
import WithSidebar from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/settings-screens/sidebar_on_dark";
import WithSidebarRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/settings-screens/sidebar_on_dark.jsx?raw";

// 02. Stacked
import Stacked from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/settings-screens/stacked";
import StackedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/settings-screens/stacked.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const SettingsScreensDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With sidebar",
      component: <WithSidebar />,
      raw: WithSidebarRaw,
    },
    {
      id: "02",
      name: "Stacked",
      component: <Stacked />,
      raw: StackedRaw,
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

export default SettingsScreensDemoPage;
