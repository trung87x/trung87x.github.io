import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic example
import Basic from "@/features/tailwind-v4/components/ui-kit/checkbox/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/basic.jsx?raw";

// 02. With label
import WithLabel from "@/features/tailwind-v4/components/ui-kit/checkbox/with-label";
import WithLabelRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/with-label.jsx?raw";

// 03. With description
import WithDescription from "@/features/tailwind-v4/components/ui-kit/checkbox/with-description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/with-description.jsx?raw";

// 04. With custom layout
import CustomLayout from "@/features/tailwind-v4/components/ui-kit/checkbox/custom-layout";
import CustomLayoutRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/custom-layout.jsx?raw";

// 05. With accent color
import AccentColor from "@/features/tailwind-v4/components/ui-kit/checkbox/accent-color";
import AccentColorRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/accent-color.jsx?raw";

// 06. With custom value
import CustomValue from "@/features/tailwind-v4/components/ui-kit/checkbox/custom-value";
import CustomValueRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/custom-value.jsx?raw";

// 07. Default checked state
import DefaultChecked from "@/features/tailwind-v4/components/ui-kit/checkbox/default-checked";
import DefaultCheckedRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/default-checked.jsx?raw";

// 08. Indeterminate state
import Indeterminate from "@/features/tailwind-v4/components/ui-kit/checkbox/indeterminate";
import IndeterminateRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/indeterminate.jsx?raw";

// 09. Controlled component
import Controlled from "@/features/tailwind-v4/components/ui-kit/checkbox/controlled";
import ControlledRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/controlled.jsx?raw";

// 10. Multiple checkboxes
import MultipleCheckboxes from "@/features/tailwind-v4/components/ui-kit/checkbox/multiple";
import MultipleCheckboxesRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/multiple.jsx?raw";

// 11. With fieldset
import WithFieldset from "@/features/tailwind-v4/components/ui-kit/checkbox/with-fieldset";
import WithFieldsetRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/with-fieldset.jsx?raw";

// 12. Disabled state
import DisabledState from "@/features/tailwind-v4/components/ui-kit/checkbox/disabled";
import DisabledStateRaw from "@/features/tailwind-v4/components/ui-kit/checkbox/disabled.jsx?raw";

const Page = () => {
  const layouts = [
    { id: "01", name: "Basic Example", component: <Basic />, raw: BasicRaw },
    {
      id: "02",
      name: "With Label",
      component: <WithLabel />,
      raw: WithLabelRaw,
    },
    {
      id: "03",
      name: "With Description",
      component: <WithDescription />,
      raw: WithDescriptionRaw,
    },
    {
      id: "04",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: CustomLayoutRaw,
    },
    {
      id: "05",
      name: "With Accent Color",
      component: <AccentColor />,
      raw: AccentColorRaw,
    },
    {
      id: "06",
      name: "With Custom Value",
      component: <CustomValue />,
      raw: CustomValueRaw,
    },
    {
      id: "07",
      name: "Default Checked State",
      component: <DefaultChecked />,
      raw: DefaultCheckedRaw,
    },
    {
      id: "08",
      name: "Indeterminate State",
      component: <Indeterminate />,
      raw: IndeterminateRaw,
    },
    {
      id: "09",
      name: "Controlled Component",
      component: <Controlled />,
      raw: ControlledRaw,
    },
    {
      id: "10",
      name: "Multiple Checkboxes",
      component: <MultipleCheckboxes />,
      raw: MultipleCheckboxesRaw,
    },
    {
      id: "11",
      name: "With Fieldset",
      component: <WithFieldset />,
      raw: WithFieldsetRaw,
    },
    {
      id: "12",
      name: "Disabled State",
      component: <DisabledState />,
      raw: DisabledStateRaw,
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
            {layout.component}
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
