import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/navbar/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/navbar/basic.jsx?raw";

// 02. With logo
import WithLogo from "@/features/tailwind-v4/components/ui-kit/navbar/with-logo";
import WithLogoRaw from "@/features/tailwind-v4/components/ui-kit/navbar/with-logo.jsx?raw";

// 03. With active state
import ActiveState from "@/features/tailwind-v4/components/ui-kit/navbar/active-state";
import ActiveStateRaw from "@/features/tailwind-v4/components/ui-kit/navbar/active-state.jsx?raw";

// 04. With icon links
import IconLinks from "@/features/tailwind-v4/components/ui-kit/navbar/icon-links";
import IconLinksRaw from "@/features/tailwind-v4/components/ui-kit/navbar/icon-links.jsx?raw";

// 05. With space between items
import SpaceBetween from "@/features/tailwind-v4/components/ui-kit/navbar/space-between";
import SpaceBetweenRaw from "@/features/tailwind-v4/components/ui-kit/navbar/space-between.jsx?raw";

// 06. With divider
import WithDivider from "@/features/tailwind-v4/components/ui-kit/navbar/with-divider";
import WithDividerRaw from "@/features/tailwind-v4/components/ui-kit/navbar/with-divider.jsx?raw";

// 07. With dropdown
import WithDropdown from "@/features/tailwind-v4/components/ui-kit/navbar/with-dropdown";
import WithDropdownRaw from "@/features/tailwind-v4/components/ui-kit/navbar/with-dropdown.jsx?raw";

// 08. With avatar dropdown
import AvatarDropdown from "@/features/tailwind-v4/components/ui-kit/navbar/avatar-dropdown";
import AvatarDropdownRaw from "@/features/tailwind-v4/components/ui-kit/navbar/avatar-dropdown.jsx?raw";

// 09. With mobile menu
import MobileMenu from "@/features/tailwind-v4/components/ui-kit/navbar/mobile-menu";
import MobileMenuRaw from "@/features/tailwind-v4/components/ui-kit/navbar/mobile-menu.jsx?raw";

// 10. Hiding items on mobile
import HidingMobile from "@/features/tailwind-v4/components/ui-kit/navbar/hiding-mobile";
import HidingMobileRaw from "@/features/tailwind-v4/components/ui-kit/navbar/hiding-mobile.jsx?raw";

const Page = () => {
  const layouts = [
    { id: "01", name: "Basic", component: <Basic />, raw: BasicRaw },
    { id: "02", name: "With Logo", component: <WithLogo />, raw: WithLogoRaw },
    {
      id: "03",
      name: "With Active State",
      component: <ActiveState />,
      raw: ActiveStateRaw,
    },
    {
      id: "04",
      name: "With Icon Links",
      component: <IconLinks />,
      raw: IconLinksRaw,
    },
    {
      id: "05",
      name: "With Space Between Items",
      component: <SpaceBetween />,
      raw: SpaceBetweenRaw,
    },
    {
      id: "06",
      name: "With Divider",
      component: <WithDivider />,
      raw: WithDividerRaw,
    },
    {
      id: "07",
      name: "With Dropdown",
      component: <WithDropdown />,
      raw: WithDropdownRaw,
    },
    {
      id: "08",
      name: "With Avatar Dropdown",
      component: <AvatarDropdown />,
      raw: AvatarDropdownRaw,
    },
    {
      id: "09",
      name: "With Mobile Menu",
      component: <MobileMenu />,
      raw: MobileMenuRaw,
    },
    {
      id: "10",
      name: "Hiding Items on Mobile",
      component: <HidingMobile />,
      raw: HidingMobileRaw,
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-10 last:border-0"
        >
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            {layout.id}. {layout.name}
          </h2>
          <PreviewWrapper name={layout.name} code={layout.raw}>
            {/* Navbar cần không gian rộng để hiển thị đúng thực tế */}
            <div className="w-full bg-gray-50 p-4">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
