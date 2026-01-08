import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/dropdown/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/basic.jsx?raw";

// 02. Button style
import ButtonStyle from "@/features/tailwind-v4/components/ui-kit/dropdown/button-style";
import ButtonStyleRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/button-style.jsx?raw";

// 03. Menu placement
import MenuPlacement from "@/features/tailwind-v4/components/ui-kit/dropdown/menu-placement";
import MenuPlacementRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/menu-placement.jsx?raw";

// 04. With disabled items
import WithDisabled from "@/features/tailwind-v4/components/ui-kit/dropdown/with-disabled";
import WithDisabledRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/with-disabled.jsx?raw";

// 05. With sections
import WithSections from "@/features/tailwind-v4/components/ui-kit/dropdown/with-sections";
import WithSectionsRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/with-sections.jsx?raw";

// 06. With descriptions
import WithDescriptions from "@/features/tailwind-v4/components/ui-kit/dropdown/with-descriptions";
import WithDescriptionsRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/with-descriptions.jsx?raw";

// 07. With icons
import WithIcons from "@/features/tailwind-v4/components/ui-kit/dropdown/with-icons";
import WithIconsRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/with-icons.jsx?raw";

// 08. With keyboard shortcuts
import WithShortcuts from "@/features/tailwind-v4/components/ui-kit/dropdown/with-shortcuts";
import WithShortcutsRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/with-shortcuts.jsx?raw";

// 09. With header
import WithHeader from "@/features/tailwind-v4/components/ui-kit/dropdown/with-header";
import WithHeaderRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/with-header.jsx?raw";

// 10. With disabled button
import DisabledButton from "@/features/tailwind-v4/components/ui-kit/dropdown/disabled-button";
import DisabledButtonRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/disabled-button.jsx?raw";

// 11. With icon trigger
import IconTrigger from "@/features/tailwind-v4/components/ui-kit/dropdown/icon-trigger";
import IconTriggerRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/icon-trigger.jsx?raw";

// 12. With avatar trigger
import AvatarTrigger from "@/features/tailwind-v4/components/ui-kit/dropdown/avatar-trigger";
import AvatarTriggerRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/avatar-trigger.jsx?raw";

// 13. With custom trigger
import CustomTrigger from "@/features/tailwind-v4/components/ui-kit/dropdown/custom-trigger";
import CustomTriggerRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/custom-trigger.jsx?raw";

// 14. With custom menu width
import CustomMenuWidth from "@/features/tailwind-v4/components/ui-kit/dropdown/custom-width";
import CustomMenuWidthRaw from "@/features/tailwind-v4/components/ui-kit/dropdown/custom-width.jsx?raw";

const currentUser = {
  name: "Đinh Quang Trung",
  avatarUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  role: "Administrator",
};

const mockActions = {
  url: "https://google.com",
  renameFile: () => alert("Rename!"),
  deleteFile: () => alert("Delete!"),
  signOut: () => alert("Signed out!"),
  deleteUser: () => alert("User Deleted!"),
};

const Page = () => {
  const layouts = [
    { id: "01", name: "Basic", component: <Basic />, raw: BasicRaw },
    {
      id: "02",
      name: "Button Style",
      component: <ButtonStyle />,
      raw: ButtonStyleRaw,
    },
    {
      id: "03",
      name: "Menu Placement",
      component: <MenuPlacement />,
      raw: MenuPlacementRaw,
    },
    {
      id: "04",
      name: "With Disabled Items",
      component: <WithDisabled {...mockActions} />,
      raw: WithDisabledRaw,
    },
    {
      id: "05",
      name: "With Sections",
      component: <WithSections />,
      raw: WithSectionsRaw,
    },
    {
      id: "06",
      name: "With Descriptions",
      component: <WithDescriptions {...mockActions} />,
      raw: WithDescriptionsRaw,
    },
    {
      id: "07",
      name: "With Icons",
      component: <WithIcons />,
      raw: WithIconsRaw,
    },
    {
      id: "08",
      name: "With Keyboard Shortcuts",
      component: <WithShortcuts {...mockActions} />,
      raw: WithShortcutsRaw,
    },
    {
      id: "09",
      name: "With Header",
      component: <WithHeader {...mockActions} />,
      raw: WithHeaderRaw,
    },
    {
      id: "10",
      name: "With Disabled Button",
      component: <DisabledButton {...mockActions} />,
      raw: DisabledButtonRaw,
    },
    {
      id: "11",
      name: "With Icon Trigger",
      component: <IconTrigger {...mockActions} />,
      raw: IconTriggerRaw,
    },
    {
      id: "12",
      name: "With Avatar Trigger",
      component: <AvatarTrigger currentUser={currentUser} {...mockActions} />,
      raw: AvatarTriggerRaw,
    },
    {
      id: "13",
      name: "With Custom Trigger",
      component: <CustomTrigger currentUser={currentUser} {...mockActions} />,
      raw: CustomTriggerRaw,
    },
    {
      id: "14",
      name: "With Custom Menu Width",
      component: <CustomMenuWidth />,
      raw: CustomMenuWidthRaw,
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
            <div className="flex min-h-[200px] justify-center pt-10">
              {layout.component}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
