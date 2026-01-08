import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Sidebar on dark
import SidebarOnDark from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/home-screens/sidebar_on_dark";
import SidebarOnDarkRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/home-screens/sidebar_on_dark.jsx?raw";

// 02. Stacked
import Stacked from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/home-screens/stacked";
import StackedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/page-examples/home-screens/stacked.jsx?raw";

const HomeScreensDemoPage = () => {
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

export default HomeScreensDemoPage;
