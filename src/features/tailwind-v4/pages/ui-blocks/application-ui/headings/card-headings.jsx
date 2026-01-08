import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/simple.jsx?raw";

// 02. With action
import WithAction from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_action";
import WithActionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_action.jsx?raw";

// 03. With avatar and actions
import WithAvatarAndActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_avatar_and_actions";
import WithAvatarAndActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_avatar_and_actions.jsx?raw";

// 04. With description and action
import WithDescriptionAndAction from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_description_and_action";
import WithDescriptionAndActionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_description_and_action.jsx?raw";

// 05. With description
import WithDescription from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_description.jsx?raw";

// 06. With avatar, meta, and dropdown
import WithAvatarMetaAndDropdown from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_avatar__meta__and_dropdown";
import WithAvatarMetaAndDropdownRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/card-headings/with_avatar__meta__and_dropdown.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const CardHeadingsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "With action",
      component: <WithAction />,
      raw: WithActionRaw,
    },
    {
      id: "03",
      name: "With avatar and actions",
      component: <WithAvatarAndActions />,
      raw: WithAvatarAndActionsRaw,
    },
    {
      id: "04",
      name: "With description and action",
      component: <WithDescriptionAndAction />,
      raw: WithDescriptionAndActionRaw,
    },
    {
      id: "05",
      name: "With description",
      component: <WithDescription />,
      raw: WithDescriptionRaw,
    },
    {
      id: "06",
      name: "With avatar, meta, and dropdown",
      component: <WithAvatarMetaAndDropdown />,
      raw: WithAvatarMetaAndDropdownRaw,
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

export default CardHeadingsDemoPage;
