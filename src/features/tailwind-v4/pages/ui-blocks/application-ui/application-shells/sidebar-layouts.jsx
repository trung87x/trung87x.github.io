import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Kebab-case)
// ----------------------------------------------------------------------

// 01. Simple sidebar
import SimpleSidebar from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/light_sidebar";
import SimpleSidebarRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/light_sidebar.jsx?raw";

// 02. Simple dark sidebar
import SimpleDarkSidebar from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/dark_sidebar";
import SimpleDarkSidebarRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/dark_sidebar.jsx?raw";

// 03. Sidebar with header
import SidebarWithHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/light_sidebar_with_header";
import SidebarWithHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/light_sidebar_with_header.jsx?raw";

// 04. Dark sidebar with header
import DarkSidebarWithHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/dark_sidebar_with_header";
import DarkSidebarWithHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/dark_sidebar_with_header.jsx?raw";

// 05. With constrained content area
import WithConstrainedContent from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/light_sidebar_with_constrained_content_area";
import WithConstrainedContentRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/light_sidebar_with_constrained_content_area.jsx?raw";

// 06. With off-white background
import WithOffWhiteBackground from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/light_sidebar_with_off_white_background";
import WithOffWhiteBackgroundRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/light_sidebar_with_off_white_background.jsx?raw";

// 07. Simple brand sidebar
import SimpleBrandSidebar from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/brand_sidebar";
import SimpleBrandSidebarRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/brand_sidebar.jsx?raw";

// 08. Brand sidebar with header
import BrandSidebarWithHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/brand_sidebar_with_header";
import BrandSidebarWithHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/application-shells/sidebar/brand_sidebar_with_header.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const SidebarLayoutsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple sidebar",
      component: <SimpleSidebar />,
      raw: SimpleSidebarRaw,
    },
    {
      id: "02",
      name: "Simple dark sidebar",
      component: <SimpleDarkSidebar />,
      raw: SimpleDarkSidebarRaw,
    },
    {
      id: "03",
      name: "Sidebar with header",
      component: <SidebarWithHeader />,
      raw: SidebarWithHeaderRaw,
    },
    {
      id: "04",
      name: "Dark sidebar with header",
      component: <DarkSidebarWithHeader />,
      raw: DarkSidebarWithHeaderRaw,
    },
    {
      id: "05",
      name: "With constrained content area",
      component: <WithConstrainedContent />,
      raw: WithConstrainedContentRaw,
    },
    {
      id: "06",
      name: "With off-white background",
      component: <WithOffWhiteBackground />,
      raw: WithOffWhiteBackgroundRaw,
    },
    {
      id: "07",
      name: "Simple brand sidebar",
      component: <SimpleBrandSidebar />,
      raw: SimpleBrandSidebarRaw,
    },
    {
      id: "08",
      name: "Brand sidebar with header",
      component: <BrandSidebarWithHeader />,
      raw: BrandSidebarWithHeaderRaw,
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

export default SidebarLayoutsDemoPage;
