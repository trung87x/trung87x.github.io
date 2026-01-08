import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With close button on outside
import WithCloseButtonOutside from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/with_close_button_on_outside";
import WithCloseButtonOutsideRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/with_close_button_on_outside.jsx?raw";

// 02. Empty
import Empty from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/empty";
import EmptyRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/empty.jsx?raw";

// 03. Wide empty
import WideEmpty from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/wide_empty";
import WideEmptyRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/wide_empty.jsx?raw";

// 04. With background overlay
import WithBackgroundOverlay from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/with_background_overlay";
import WithBackgroundOverlayRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/with_background_overlay.jsx?raw";

// 05. With branded header
import WithBrandedHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/with_branded_header";
import WithBrandedHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/with_branded_header.jsx?raw";

// 06. With sticky footer
import WithStickyFooter from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/with_sticky_footer";
import WithStickyFooterRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/with_sticky_footer.jsx?raw";

// 07. Create project form example
import CreateProjectFormExample from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/create_project_form_example";
import CreateProjectFormExampleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/create_project_form_example.jsx?raw";

// 08. Wide create project form example
import WideCreateProjectFormExample from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/wide_create_project_form_example";
import WideCreateProjectFormExampleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/wide_create_project_form_example.jsx?raw";

// 09. User profile example
import UserProfileExample from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/user_profile_example";
import UserProfileExampleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/user_profile_example.jsx?raw";

// 10. Wide horizontal user profile example
import WideHorizontalUserProfileExample from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/wide_horizontal_user_profile_example";
import WideHorizontalUserProfileExampleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/wide_horizontal_user_profile_example.jsx?raw";

// 11. Contact list example
import ContactListExample from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/contact_list_example";
import ContactListExampleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/contact_list_example.jsx?raw";

// 12. File details example
import FileDetailsExample from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/file_details_example";
import FileDetailsExampleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/drawers/file_details_example.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const SlideOversDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With close button on outside",
      component: <WithCloseButtonOutside />,
      raw: WithCloseButtonOutsideRaw,
    },
    { id: "02", name: "Empty", component: <Empty />, raw: EmptyRaw },
    {
      id: "03",
      name: "Wide empty",
      component: <WideEmpty />,
      raw: WideEmptyRaw,
    },
    {
      id: "04",
      name: "With background overlay",
      component: <WithBackgroundOverlay />,
      raw: WithBackgroundOverlayRaw,
    },
    {
      id: "05",
      name: "With branded header",
      component: <WithBrandedHeader />,
      raw: WithBrandedHeaderRaw,
    },
    {
      id: "06",
      name: "With sticky footer",
      component: <WithStickyFooter />,
      raw: WithStickyFooterRaw,
    },
    {
      id: "07",
      name: "Create project form example",
      component: <CreateProjectFormExample />,
      raw: CreateProjectFormExampleRaw,
    },
    {
      id: "08",
      name: "Wide create project form example",
      component: <WideCreateProjectFormExample />,
      raw: WideCreateProjectFormExampleRaw,
    },
    {
      id: "09",
      name: "User profile example",
      component: <UserProfileExample />,
      raw: UserProfileExampleRaw,
    },
    {
      id: "10",
      name: "Wide horizontal user profile example",
      component: <WideHorizontalUserProfileExample />,
      raw: WideHorizontalUserProfileExampleRaw,
    },
    {
      id: "11",
      name: "Contact list example",
      component: <ContactListExample />,
      raw: ContactListExampleRaw,
    },
    {
      id: "12",
      name: "File details example",
      component: <FileDetailsExample />,
      raw: FileDetailsExampleRaw,
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

export default SlideOversDemoPage;
