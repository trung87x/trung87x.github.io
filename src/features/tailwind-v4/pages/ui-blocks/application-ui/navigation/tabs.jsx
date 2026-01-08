import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Tabs with underline
import TabsWithUnderline from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_with_underline";
import TabsWithUnderlineRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_with_underline.jsx?raw";

// 02. Tabs with underline and icons
import TabsWithUnderlineAndIcons from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_with_underline_and_icons";
import TabsWithUnderlineAndIconsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_with_underline_and_icons.jsx?raw";

// 03. Tabs in pills
import TabsInPills from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_in_pills";
import TabsInPillsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_in_pills.jsx?raw";

// 04. Tabs in pills on gray
import TabsInPillsOnGray from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_in_pills_on_gray";
import TabsInPillsOnGrayRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_in_pills_on_gray.jsx?raw";

// 05. Tabs in pills with brand color
import TabsInPillsWithBrandColor from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_in_pills_with_brand_color";
import TabsInPillsWithBrandColorRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_in_pills_with_brand_color.jsx?raw";

// 06. Full-width tabs with underline
import FullWidthTabsWithUnderline from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/full_width_tabs_with_underline";
import FullWidthTabsWithUnderlineRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/full_width_tabs_with_underline.jsx?raw";

// 07. Bar with underline
import BarWithUnderline from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/bar_with_underline";
import BarWithUnderlineRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/bar_with_underline.jsx?raw";

// 08. Tabs with underline and badges
import TabsWithUnderlineAndBadges from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_with_underline_and_badges";
import TabsWithUnderlineAndBadgesRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/tabs_with_underline_and_badges.jsx?raw";

// 09. Simple
import SimpleTabs from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/simple_on_dark";
import SimpleTabsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/tabs/simple_on_dark.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const TabsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Tabs with underline",
      component: <TabsWithUnderline />,
      raw: TabsWithUnderlineRaw,
    },
    {
      id: "02",
      name: "Tabs with underline and icons",
      component: <TabsWithUnderlineAndIcons />,
      raw: TabsWithUnderlineAndIconsRaw,
    },
    {
      id: "03",
      name: "Tabs in pills",
      component: <TabsInPills />,
      raw: TabsInPillsRaw,
    },
    {
      id: "04",
      name: "Tabs in pills on gray",
      component: <TabsInPillsOnGray />,
      raw: TabsInPillsOnGrayRaw,
    },
    {
      id: "05",
      name: "Tabs in pills with brand color",
      component: <TabsInPillsWithBrandColor />,
      raw: TabsInPillsWithBrandColorRaw,
    },
    {
      id: "06",
      name: "Full-width tabs with underline",
      component: <FullWidthTabsWithUnderline />,
      raw: FullWidthTabsWithUnderlineRaw,
    },
    {
      id: "07",
      name: "Bar with underline",
      component: <BarWithUnderline />,
      raw: BarWithUnderlineRaw,
    },
    {
      id: "08",
      name: "Tabs with underline and badges",
      component: <TabsWithUnderlineAndBadges />,
      raw: TabsWithUnderlineAndBadgesRaw,
    },
    {
      id: "09",
      name: "Simple",
      component: <SimpleTabs />,
      raw: SimpleTabsRaw,
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

export default TabsDemoPage;
