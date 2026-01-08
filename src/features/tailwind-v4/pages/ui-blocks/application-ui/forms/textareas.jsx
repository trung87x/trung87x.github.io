import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/simple.jsx?raw";

// 02. With avatar and actions
import WithAvatarAndActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/with_avatar_and_actions";
import WithAvatarAndActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/with_avatar_and_actions.jsx?raw";

// 03. With underline and actions
import WithUnderlineAndActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/with_underline_and_actions";
import WithUnderlineAndActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/with_underline_and_actions.jsx?raw";

// 04. With title and pill actions
import WithTitleAndPillActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/with_title_and_pill_actions";
import WithTitleAndPillActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/with_title_and_pill_actions.jsx?raw";

// 05. With preview button
import WithPreviewButton from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/with_preview_button";
import WithPreviewButtonRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/textareas/with_preview_button.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const TextareasDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "With avatar and actions",
      component: <WithAvatarAndActions />,
      raw: WithAvatarAndActionsRaw,
    },
    {
      id: "03",
      name: "With underline and actions",
      component: <WithUnderlineAndActions />,
      raw: WithUnderlineAndActionsRaw,
    },
    {
      id: "04",
      name: "With title and pill actions",
      component: <WithTitleAndPillActions />,
      raw: WithTitleAndPillActionsRaw,
    },
    {
      id: "05",
      name: "With preview button",
      component: <WithPreviewButton />,
      raw: WithPreviewButtonRaw,
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

export default TextareasDemoPage;
