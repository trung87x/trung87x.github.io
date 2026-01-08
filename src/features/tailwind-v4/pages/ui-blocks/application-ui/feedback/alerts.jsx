import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With description
import WithDescription from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_description.jsx?raw";

// 02. With list
import WithList from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_list";
import WithListRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_list.jsx?raw";

// 03. With actions
import WithActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_actions";
import WithActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_actions.jsx?raw";

// 04. With link on right
import WithLinkOnRight from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_link_on_right";
import WithLinkOnRightRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_link_on_right.jsx?raw";

// 05. With accent border
import WithAccentBorder from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_accent_border";
import WithAccentBorderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_accent_border.jsx?raw";

// 06. With dismiss button
import WithDismissButton from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_dismiss_button";
import WithDismissButtonRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/alerts/with_dismiss_button.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const AlertsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With description",
      component: <WithDescription />,
      raw: WithDescriptionRaw,
    },
    {
      id: "02",
      name: "With list",
      component: <WithList />,
      raw: WithListRaw,
    },
    {
      id: "03",
      name: "With actions",
      component: <WithActions />,
      raw: WithActionsRaw,
    },
    {
      id: "04",
      name: "With link on right",
      component: <WithLinkOnRight />,
      raw: WithLinkOnRightRaw,
    },
    {
      id: "05",
      name: "With accent border",
      component: <WithAccentBorder />,
      raw: WithAccentBorderRaw,
    },
    {
      id: "06",
      name: "With dismiss button",
      component: <WithDismissButton />,
      raw: WithDismissButtonRaw,
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

export default AlertsDemoPage;
