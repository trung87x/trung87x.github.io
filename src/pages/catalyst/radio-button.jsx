import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/components/ui-kit/radio-button/basic";
import BasicRaw from "@/components/ui-kit/radio-button/basic.jsx?raw";

// 02. With description
import WithDescription from "@/components/ui-kit/radio-button/with-description";
import WithDescriptionRaw from "@/components/ui-kit/radio-button/with-description.jsx?raw";

// 03. With custom layout
import CustomLayout from "@/components/ui-kit/radio-button/custom-layout";
import CustomLayoutRaw from "@/components/ui-kit/radio-button/custom-layout.jsx?raw";

// 04. With accent color
import AccentColor from "@/components/ui-kit/radio-button/accent-color";
import AccentColorRaw from "@/components/ui-kit/radio-button/accent-color.jsx?raw";

// 05. Default selected state
import DefaultSelected from "@/components/ui-kit/radio-button/default-selected";
import DefaultSelectedRaw from "@/components/ui-kit/radio-button/default-selected.jsx?raw";

// 06. Controlled component
import Controlled from "@/components/ui-kit/radio-button/controlled";
import ControlledRaw from "@/components/ui-kit/radio-button/controlled.jsx?raw";

// 07. With fieldset
import WithFieldset from "@/components/ui-kit/radio-button/with-fieldset";
import WithFieldsetRaw from "@/components/ui-kit/radio-button/with-fieldset.jsx?raw";

// 08. Disabled state
import DisabledState from "@/components/ui-kit/radio-button/disabled";
import DisabledStateRaw from "@/components/ui-kit/radio-button/disabled.jsx?raw";

const Page = () => {
  const layouts = [
    { id: "01", name: "Basic", component: <Basic />, raw: BasicRaw },
    {
      id: "02",
      name: "With Description",
      component: <WithDescription />,
      raw: WithDescriptionRaw,
    },
    {
      id: "03",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: CustomLayoutRaw,
    },
    {
      id: "04",
      name: "With Accent Color",
      component: <AccentColor />,
      raw: AccentColorRaw,
    },
    {
      id: "05",
      name: "Default Selected State",
      component: <DefaultSelected />,
      raw: DefaultSelectedRaw,
    },
    {
      id: "06",
      name: "Controlled Component",
      component: <Controlled />,
      raw: ControlledRaw,
    },
    {
      id: "07",
      name: "With Fieldset",
      component: <WithFieldset />,
      raw: WithFieldsetRaw,
    },
    {
      id: "08",
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
            <div className="py-4">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
