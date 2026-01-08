import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/components/ui-blocks/application-ui/overlays/notifications/simple";
import SimpleRaw from "@/components/ui-blocks/application-ui/overlays/notifications/simple.jsx?raw";

// 02. Condensed
import Condensed from "@/components/ui-blocks/application-ui/overlays/notifications/condensed";
import CondensedRaw from "@/components/ui-blocks/application-ui/overlays/notifications/condensed.jsx?raw";

// 03. With actions below
import WithActionsBelow from "@/components/ui-blocks/application-ui/overlays/notifications/with_actions_below";
import WithActionsBelowRaw from "@/components/ui-blocks/application-ui/overlays/notifications/with_actions_below.jsx?raw";

// 04. With avatar
import WithAvatar from "@/components/ui-blocks/application-ui/overlays/notifications/with_avatar";
import WithAvatarRaw from "@/components/ui-blocks/application-ui/overlays/notifications/with_avatar.jsx?raw";

// 05. With split buttons
import WithSplitButtons from "@/components/ui-blocks/application-ui/overlays/notifications/with_split_buttons";
import WithSplitButtonsRaw from "@/components/ui-blocks/application-ui/overlays/notifications/with_split_buttons.jsx?raw";

// 06. With buttons below
import WithButtonsBelow from "@/components/ui-blocks/application-ui/overlays/notifications/with_buttons_below";
import WithButtonsBelowRaw from "@/components/ui-blocks/application-ui/overlays/notifications/with_buttons_below.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const NotificationsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "Condensed",
      component: <Condensed />,
      raw: CondensedRaw,
    },
    {
      id: "03",
      name: "With actions below",
      component: <WithActionsBelow />,
      raw: WithActionsBelowRaw,
    },
    {
      id: "04",
      name: "With avatar",
      component: <WithAvatar />,
      raw: WithAvatarRaw,
    },
    {
      id: "05",
      name: "With split buttons",
      component: <WithSplitButtons />,
      raw: WithSplitButtonsRaw,
    },
    {
      id: "06",
      name: "With buttons below",
      component: <WithButtonsBelow />,
      raw: WithButtonsBelowRaw,
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

export default NotificationsDemoPage;
