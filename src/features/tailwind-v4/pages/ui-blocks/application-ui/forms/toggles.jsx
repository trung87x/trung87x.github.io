import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple toggle
import SimpleToggle from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/simple_toggle";
import SimpleToggleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/simple_toggle.jsx?raw";

// 02. Short toggle
import ShortToggle from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/short_toggle";
import ShortToggleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/short_toggle.jsx?raw";

// 03. Toggle with icon
import ToggleWithIcon from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/toggle_with_icon";
import ToggleWithIconRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/toggle_with_icon.jsx?raw";

// 04. With left label and description
import WithLeftLabelAndDescription from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/with_left_label_and_description";
import WithLeftLabelAndDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/with_left_label_and_description.jsx?raw";

// 05. With right label
import WithRightLabel from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/with_right_label";
import WithRightLabelRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/toggles/with_right_label.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const TogglesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple toggle",
      component: <SimpleToggle />,
      raw: SimpleToggleRaw,
    },
    {
      id: "02",
      name: "Short toggle",
      component: <ShortToggle />,
      raw: ShortToggleRaw,
    },
    {
      id: "03",
      name: "Toggle with icon",
      component: <ToggleWithIcon />,
      raw: ToggleWithIconRaw,
    },
    {
      id: "04",
      name: "With left label and description",
      component: <WithLeftLabelAndDescription />,
      raw: WithLeftLabelAndDescriptionRaw,
    },
    {
      id: "05",
      name: "With right label",
      component: <WithRightLabel />,
      raw: WithRightLabelRaw,
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

export default TogglesDemoPage;
