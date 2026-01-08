import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/simple.jsx?raw";

// 02. With badges
import WithBadges from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/with_badges";
import WithBadgesRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/with_badges.jsx?raw";

// 03. With icons and badges
import WithIconsAndBadges from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/with_icons_and_badges";
import WithIconsAndBadgesRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/with_icons_and_badges.jsx?raw";

// 04. With icons
import WithIcons from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/with_icons";
import WithIconsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/with_icons.jsx?raw";

// 05. With secondary navigation
import WithSecondaryNavigation from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/with_secondary_navigation";
import WithSecondaryNavigationRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/with_secondary_navigation.jsx?raw";

// 06. On gray
import OnGray from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/on_gray";
import OnGrayRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/vertical-navigation/on_gray.jsx?raw";

const VerticalNavigationDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "With badges",
      component: <WithBadges />,
      raw: WithBadgesRaw,
    },
    {
      id: "03",
      name: "With icons and badges",
      component: <WithIconsAndBadges />,
      raw: WithIconsAndBadgesRaw,
    },
    {
      id: "04",
      name: "With icons",
      component: <WithIcons />,
      raw: WithIconsRaw,
    },
    {
      id: "05",
      name: "With secondary navigation",
      component: <WithSecondaryNavigation />,
      raw: WithSecondaryNavigationRaw,
    },
    {
      id: "06",
      name: "On gray",
      component: <OnGray />,
      raw: OnGrayRaw,
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

export default VerticalNavigationDemoPage;
