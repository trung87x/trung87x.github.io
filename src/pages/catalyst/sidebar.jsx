import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/components/ui-kit/sidebar/basic";
import BasicRaw from "@/components/blocks/sidebar/basic.jsx?raw";

// 02. With logo
import WithLogo from "@/components/ui-kit/sidebar/with-logo";
import WithLogoRaw from "@/components/blocks/sidebar/with-logo.jsx?raw";

// 03. With icons
import WithIcons from "@/components/ui-kit/sidebar/with-icons";
import WithIconsRaw from "@/components/blocks/sidebar/with-icons.jsx?raw";

// 04. With active state
import ActiveState from "@/components/ui-kit/sidebar/active-state";
import ActiveStateRaw from "@/components/blocks/sidebar/active-state.jsx?raw";

// 05. With sticky header
import StickyHeader from "@/components/ui-kit/sidebar/sticky-header";
import StickyHeaderRaw from "@/components/blocks/sidebar/sticky-header.jsx?raw";

// 06. With sticky footer
import StickyFooter from "@/components/ui-kit/sidebar/sticky-footer";
import StickyFooterRaw from "@/components/blocks/sidebar/sticky-footer.jsx?raw";

// 07. With section headings
import SectionHeadings from "@/components/ui-kit/sidebar/section-headings";
import SectionHeadingsRaw from "@/components/blocks/sidebar/section-headings.jsx?raw";

// 08. With space between sections
import SpaceBetween from "@/components/ui-kit/sidebar/space-between";
import SpaceBetweenRaw from "@/components/blocks/sidebar/space-between.jsx?raw";

// 09. With divider
import WithDivider from "@/components/ui-kit/sidebar/with-divider";
import WithDividerRaw from "@/components/blocks/sidebar/with-divider.jsx?raw";

// 10. With dropdown
import WithDropdown from "@/components/ui-kit/sidebar/with-dropdown";
import WithDropdownRaw from "@/components/blocks/sidebar/with-dropdown.jsx?raw";

const Page = () => {
  const layouts = [
    { id: "01", name: "Basic", component: <Basic />, raw: BasicRaw },
    { id: "02", name: "With Logo", component: <WithLogo />, raw: WithLogoRaw },
    {
      id: "03",
      name: "With Icons",
      component: <WithIcons />,
      raw: WithIconsRaw,
    },
    {
      id: "04",
      name: "With Active State",
      component: <ActiveState />,
      raw: ActiveStateRaw,
    },
    {
      id: "05",
      name: "With Sticky Header",
      component: <StickyHeader />,
      raw: StickyHeaderRaw,
    },
    {
      id: "06",
      name: "With Sticky Footer",
      component: <StickyFooter />,
      raw: StickyFooterRaw,
    },
    {
      id: "07",
      name: "With Section Headings",
      component: <SectionHeadings />,
      raw: SectionHeadingsRaw,
    },
    {
      id: "08",
      name: "With Space Between Sections",
      component: <SpaceBetween />,
      raw: SpaceBetweenRaw,
    },
    {
      id: "09",
      name: "With Divider",
      component: <WithDivider />,
      raw: WithDividerRaw,
    },
    {
      id: "10",
      name: "With Dropdown",
      component: <WithDropdown />,
      raw: WithDropdownRaw,
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
            {/* Sidebar cần chiều cao cố định trong bản xem trước để thể hiện tính chất scroll/sticky */}
            <div className="flex h-[400px] w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 bg-white">
              {layout.component}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
