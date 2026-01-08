import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/simple.jsx?raw";

// 02. With description
import WithDescription from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_description.jsx?raw";

// 03. With actions
import WithActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_actions";
import WithActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_actions.jsx?raw";

// 04. With action
import WithAction from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_action";
import WithActionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_action.jsx?raw";

// 05. With input group
import WithInputGroup from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_input_group";
import WithInputGroupRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_input_group.jsx?raw";

// 06. With tabs
import WithTabs from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_tabs";
import WithTabsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_tabs.jsx?raw";

// 07. With actions and tabs
import WithActionsAndTabs from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_actions_and_tabs";
import WithActionsAndTabsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_actions_and_tabs.jsx?raw";

// 08. With inline tabs
import WithInlineTabs from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_inline_tabs";
import WithInlineTabsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_inline_tabs.jsx?raw";

// 09. With label
import WithLabel from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_label";
import WithLabelRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_label.jsx?raw";

// 10. With badge and dropdown
import WithBadgeAndDropdown from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_badge_and_dropdown";
import WithBadgeAndDropdownRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/section-headings/with_badge_and_dropdown.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const SectionHeadingsDemoPage = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, raw: SimpleRaw },
    {
      id: "02",
      name: "With description",
      component: <WithDescription />,
      raw: WithDescriptionRaw,
    },
    {
      id: "03",
      name: "With actions",
      component: <WithActions />,
      raw: WithActionsRaw,
    },
    {
      id: "04",
      name: "With action",
      component: <WithAction />,
      raw: WithActionRaw,
    },
    {
      id: "05",
      name: "With input group",
      component: <WithInputGroup />,
      raw: WithInputGroupRaw,
    },
    { id: "06", name: "With tabs", component: <WithTabs />, raw: WithTabsRaw },
    {
      id: "07",
      name: "With actions and tabs",
      component: <WithActionsAndTabs />,
      raw: WithActionsAndTabsRaw,
    },
    {
      id: "08",
      name: "With inline tabs",
      component: <WithInlineTabs />,
      raw: WithInlineTabsRaw,
    },
    {
      id: "09",
      name: "With label",
      component: <WithLabel />,
      raw: WithLabelRaw,
    },
    {
      id: "10",
      name: "With badge and dropdown",
      component: <WithBadgeAndDropdown />,
      raw: WithBadgeAndDropdownRaw,
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

export default SectionHeadingsDemoPage;
