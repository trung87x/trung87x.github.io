import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. List with description
import ListWithDescription from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/checkboxes/list_with_description";
import ListWithDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/checkboxes/list_with_description.jsx?raw";

// 02. List with inline description
import ListWithInlineDescription from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/checkboxes/list_with_inline_description";
import ListWithInlineDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/checkboxes/list_with_inline_description.jsx?raw";

// 03. List with checkbox on right
import ListWithCheckboxOnRight from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/checkboxes/list_with_checkbox_on_right";
import ListWithCheckboxOnRightRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/checkboxes/list_with_checkbox_on_right.jsx?raw";

// 04. Simple list with heading
import SimpleListWithHeading from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/checkboxes/simple_list_with_heading";
import SimpleListWithHeadingRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/checkboxes/simple_list_with_heading.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const CheckboxesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "List with description",
      component: <ListWithDescription />,
      raw: ListWithDescriptionRaw,
    },
    {
      id: "02",
      name: "List with inline description",
      component: <ListWithInlineDescription />,
      raw: ListWithInlineDescriptionRaw,
    },
    {
      id: "03",
      name: "List with checkbox on right",
      component: <ListWithCheckboxOnRight />,
      raw: ListWithCheckboxOnRightRaw,
    },
    {
      id: "04",
      name: "Simple list with heading",
      component: <SimpleListWithHeading />,
      raw: SimpleListWithHeadingRaw,
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

export default CheckboxesDemoPage;
