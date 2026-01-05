import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. Light
import Light from "@/component-plus/application-ui/navigation/sidebar-navigation/light";
import LightRaw from "@/component-plus/application-ui/navigation/sidebar-navigation/light.jsx?raw";

// 02. Dark
import Dark from "@/component-plus/application-ui/navigation/sidebar-navigation/dark";
import DarkRaw from "@/component-plus/application-ui/navigation/sidebar-navigation/dark.jsx?raw";

// 03. With expandable sections
import WithExpandableSections from "@/component-plus/application-ui/navigation/sidebar-navigation/with_expandable_sections";
import WithExpandableSectionsRaw from "@/component-plus/application-ui/navigation/sidebar-navigation/with_expandable_sections.jsx?raw";

// 04. With secondary navigation
import WithSecondaryNavigation from "@/component-plus/application-ui/navigation/sidebar-navigation/with_secondary_navigation";
import WithSecondaryNavigationRaw from "@/component-plus/application-ui/navigation/sidebar-navigation/with_secondary_navigation.jsx?raw";

// 05. Brand
import Brand from "@/component-plus/application-ui/navigation/sidebar-navigation/brand";
import BrandRaw from "@/component-plus/application-ui/navigation/sidebar-navigation/brand.jsx?raw";

const SidebarNavigationDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Light",
      component: <Light />,
      raw: LightRaw,
    },
    {
      id: "02",
      name: "Dark",
      component: <Dark />,
      raw: DarkRaw,
    },
    {
      id: "03",
      name: "With expandable sections",
      component: <WithExpandableSections />,
      raw: WithExpandableSectionsRaw,
    },
    {
      id: "04",
      name: "With secondary navigation",
      component: <WithSecondaryNavigation />,
      raw: WithSecondaryNavigationRaw,
    },
    {
      id: "05",
      name: "Brand",
      component: <Brand />,
      raw: BrandRaw,
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

export default SidebarNavigationDemoPage;
