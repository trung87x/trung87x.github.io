import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/switch/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/switch/basic.jsx?raw";

// 02. With label
import WithLabel from "@/features/tailwind-v4/components/ui-kit/switch/with-label";
import WithLabelRaw from "@/features/tailwind-v4/components/ui-kit/switch/with-label.jsx?raw";

// 03. With description
import WithDescription from "@/features/tailwind-v4/components/ui-kit/switch/with-description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-kit/switch/with-description.jsx?raw";

// 04. With custom layout
import CustomLayout from "@/features/tailwind-v4/components/ui-kit/switch/custom-layout";
import CustomLayoutRaw from "@/features/tailwind-v4/components/ui-kit/switch/custom-layout.jsx?raw";

// 05. With accent color
import AccentColor from "@/features/tailwind-v4/components/ui-kit/switch/accent-color";
import AccentColorRaw from "@/features/tailwind-v4/components/ui-kit/switch/accent-color.jsx?raw";

// 06. With custom value
import CustomValue from "@/features/tailwind-v4/components/ui-kit/switch/custom-value";
import CustomValueRaw from "@/features/tailwind-v4/components/ui-kit/switch/custom-value.jsx?raw";

// 07. Default checked state
import DefaultChecked from "@/features/tailwind-v4/components/ui-kit/switch/default-checked";
import DefaultCheckedRaw from "@/features/tailwind-v4/components/ui-kit/switch/default-checked.jsx?raw";

// 08. Controlled component
import Controlled from "@/features/tailwind-v4/components/ui-kit/switch/controlled";
import ControlledRaw from "@/features/tailwind-v4/components/ui-kit/switch/controlled.jsx?raw";

// 09. Multiple switches
import MultipleSwitches from "@/features/tailwind-v4/components/ui-kit/switch/multiple";
import MultipleSwitchesRaw from "@/features/tailwind-v4/components/ui-kit/switch/multiple.jsx?raw";

// 10. With fieldset
import WithFieldset from "@/features/tailwind-v4/components/ui-kit/switch/with-fieldset";
import WithFieldsetRaw from "@/features/tailwind-v4/components/ui-kit/switch/with-fieldset.jsx?raw";

// 11. Disabled state
import DisabledState from "@/features/tailwind-v4/components/ui-kit/switch/disabled";
import DisabledStateRaw from "@/features/tailwind-v4/components/ui-kit/switch/disabled.jsx?raw";

const Page = () => {
  const layouts = [
    { id: "01", name: "Basic", component: <Basic />, raw: BasicRaw },
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
      name: "Controlled Component",
      component: <Controlled />,
      raw: ControlledRaw,
    },
    {
      id: "09",
      name: "Multiple Switches",
      component: <MultipleSwitches />,
      raw: MultipleSwitchesRaw,
    },
    {
      id: "10",
      name: "With Fieldset",
      component: <WithFieldset />,
      raw: WithFieldsetRaw,
    },
    {
      id: "11",
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
            <div className="flex justify-center py-6">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
