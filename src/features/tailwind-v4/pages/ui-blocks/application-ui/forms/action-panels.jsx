import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/simple.jsx?raw";

// 02. With link
import WithLink from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_link";
import WithLinkRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_link.jsx?raw";

// 03. With button on right
import WithButtonOnRight from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_button_on_right";
import WithButtonOnRightRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_button_on_right.jsx?raw";

// 04. With button at top right
import WithButtonAtTopRight from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_button_at_top_right";
import WithButtonAtTopRightRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_button_at_top_right.jsx?raw";

// 05. With toggle
import WithToggle from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_toggle";
import WithToggleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_toggle.jsx?raw";

// 06. With input
import WithInput from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_input";
import WithInputRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_input.jsx?raw";

// 07. Simple well
import SimpleWell from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/simple_well";
import SimpleWellRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/simple_well.jsx?raw";

// 08. With well
import WithWell from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_well";
import WithWellRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/action-panels/with_well.jsx?raw";

const ActionPanelsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "With link",
      component: <WithLink />,
      raw: WithLinkRaw,
    },
    {
      id: "03",
      name: "With button on right",
      component: <WithButtonOnRight />,
      raw: WithButtonOnRightRaw,
    },
    {
      id: "04",
      name: "With button at top right",
      component: <WithButtonAtTopRight />,
      raw: WithButtonAtTopRightRaw,
    },
    {
      id: "05",
      name: "With toggle",
      component: <WithToggle />,
      raw: WithToggleRaw,
    },
    {
      id: "06",
      name: "With input",
      component: <WithInput />,
      raw: WithInputRaw,
    },
    {
      id: "07",
      name: "Simple well",
      component: <SimpleWell />,
      raw: SimpleWellRaw,
    },
    {
      id: "08",
      name: "With well",
      component: <WithWell />,
      raw: WithWellRaw,
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

export default ActionPanelsDemoPage;
