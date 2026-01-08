import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Sidebar on dark
import SidebarOnDark from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/detail-screens/sidebar_on_dark";
import SidebarOnDarkRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/detail-screens/sidebar_on_dark.jsx?raw";

// 02. Stacked
import StackedLayout from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/detail-screens/stacked";
import StackedLayoutRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/detail-screens/stacked.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const StackedLayoutsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Sidebar on dark",
      component: <SidebarOnDark />,
      raw: SidebarOnDarkRaw,
    },
    {
      id: "02",
      name: "Stacked",
      component: <StackedLayout />,
      raw: StackedLayoutRaw,
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

export default StackedLayoutsDemoPage;
