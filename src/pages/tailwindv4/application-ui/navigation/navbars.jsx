import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple dark with menu button on left
import SimpleDarkWithMenuButtonOnLeft from "@/component-plus/application-ui/navigation/navbars/simple_dark_with_menu_button_on_left";
import SimpleDarkWithMenuButtonOnLeftRaw from "@/component-plus/application-ui/navigation/navbars/simple_dark_with_menu_button_on_left.jsx?raw";

// 02. Dark with quick action
import DarkWithQuickAction from "@/component-plus/application-ui/navigation/navbars/dark_with_quick_action";
import DarkWithQuickActionRaw from "@/component-plus/application-ui/navigation/navbars/dark_with_quick_action.jsx?raw";

// 03. Simple dark
import SimpleDark from "@/component-plus/application-ui/navigation/navbars/simple_dark";
import SimpleDarkRaw from "@/component-plus/application-ui/navigation/navbars/simple_dark.jsx?raw";

// 04. Simple with menu button on left
import SimpleWithMenuButtonOnLeft from "@/component-plus/application-ui/navigation/navbars/simple_with_menu_button_on_left";
import SimpleWithMenuButtonOnLeftRaw from "@/component-plus/application-ui/navigation/navbars/simple_with_menu_button_on_left.jsx?raw";

// 05. Simple
import SimpleNavbar from "@/component-plus/application-ui/navigation/navbars/simple";
import SimpleNavbarRaw from "@/component-plus/application-ui/navigation/navbars/simple.jsx?raw";

// 06. With quick action
import WithQuickAction from "@/component-plus/application-ui/navigation/navbars/with_quick_action";
import WithQuickActionRaw from "@/component-plus/application-ui/navigation/navbars/with_quick_action.jsx?raw";

// 07. Dark with search
import DarkWithSearch from "@/component-plus/application-ui/navigation/navbars/dark_with_search";
import DarkWithSearchRaw from "@/component-plus/application-ui/navigation/navbars/dark_with_search.jsx?raw";

// 08. With search
import WithSearch from "@/component-plus/application-ui/navigation/navbars/with_search";
import WithSearchRaw from "@/component-plus/application-ui/navigation/navbars/with_search.jsx?raw";

// 09. Dark with centered search and secondary links
import DarkWithCenteredSearch from "@/component-plus/application-ui/navigation/navbars/with_centered_search_and_secondary_links_dark";
import DarkWithCenteredSearchRaw from "@/component-plus/application-ui/navigation/navbars/with_centered_search_and_secondary_links_dark.jsx?raw";

// 10. With centered search and secondary links
import WithCenteredSearch from "@/component-plus/application-ui/navigation/navbars/with_centered_search_and_secondary_links";
import WithCenteredSearchRaw from "@/component-plus/application-ui/navigation/navbars/with_centered_search_and_secondary_links.jsx?raw";

// 11. With search in column layout
import WithSearchInColumnLayout from "@/component-plus/application-ui/navigation/navbars/with_search_in_column_layout";
import WithSearchInColumnLayoutRaw from "@/component-plus/application-ui/navigation/navbars/with_search_in_column_layout.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const NavbarsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple dark with menu button on left",
      component: <SimpleDarkWithMenuButtonOnLeft />,
      raw: SimpleDarkWithMenuButtonOnLeftRaw,
    },
    {
      id: "02",
      name: "Dark with quick action",
      component: <DarkWithQuickAction />,
      raw: DarkWithQuickActionRaw,
    },
    {
      id: "03",
      name: "Simple dark",
      component: <SimpleDark />,
      raw: SimpleDarkRaw,
    },
    {
      id: "04",
      name: "Simple with menu button on left",
      component: <SimpleWithMenuButtonOnLeft />,
      raw: SimpleWithMenuButtonOnLeftRaw,
    },
    {
      id: "05",
      name: "Simple",
      component: <SimpleNavbar />,
      raw: SimpleNavbarRaw,
    },
    {
      id: "06",
      name: "With quick action",
      component: <WithQuickAction />,
      raw: WithQuickActionRaw,
    },
    {
      id: "07",
      name: "Dark with search",
      component: <DarkWithSearch />,
      raw: DarkWithSearchRaw,
    },
    {
      id: "08",
      name: "With search",
      component: <WithSearch />,
      raw: WithSearchRaw,
    },
    {
      id: "09",
      name: "Dark with centered search and secondary links",
      component: <DarkWithCenteredSearch />,
      raw: DarkWithCenteredSearchRaw,
    },
    {
      id: "10",
      name: "With centered search and secondary links",
      component: <WithCenteredSearch />,
      raw: WithCenteredSearchRaw,
    },
    {
      id: "11",
      name: "With search in column layout",
      component: <WithSearchInColumnLayout />,
      raw: WithSearchInColumnLayoutRaw,
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

export default NavbarsDemoPage;
