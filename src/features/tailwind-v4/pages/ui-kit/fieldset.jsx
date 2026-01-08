import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/fieldset/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/fieldset/basic.jsx?raw";

// 02. Without legend
import WithoutLegend from "@/features/tailwind-v4/components/ui-kit/fieldset/without-legend";
import WithoutLegendRaw from "@/features/tailwind-v4/components/ui-kit/fieldset/without-legend.jsx?raw";

// 03. Without role
import WithoutRole from "@/features/tailwind-v4/components/ui-kit/fieldset/without-role";
import WithoutRoleRaw from "@/features/tailwind-v4/components/ui-kit/fieldset/without-role.jsx?raw";

// 04. With grid layout
import GridLayout from "@/features/tailwind-v4/components/ui-kit/fieldset/grid-layout";
import GridLayoutRaw from "@/features/tailwind-v4/components/ui-kit/fieldset/grid-layout.jsx?raw";

// 05. With custom layout
import CustomLayout from "@/features/tailwind-v4/components/ui-kit/fieldset/custom-layout";
import CustomLayoutRaw from "@/features/tailwind-v4/components/ui-kit/fieldset/custom-layout.jsx?raw";

// 06. Disabled state
import DisabledState from "@/features/tailwind-v4/components/ui-kit/fieldset/disabled";
import DisabledStateRaw from "@/features/tailwind-v4/components/ui-kit/fieldset/disabled.jsx?raw";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: BasicRaw,
    },
    {
      id: "02",
      name: "Without Legend",
      component: <WithoutLegend />,
      raw: WithoutLegendRaw,
    },
    {
      id: "03",
      name: "Without Role",
      component: <WithoutRole />,
      raw: WithoutRoleRaw,
    },
    {
      id: "04",
      name: "With Grid Layout",
      component: <GridLayout />,
      raw: GridLayoutRaw,
    },
    {
      id: "05",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: CustomLayoutRaw,
    },
    {
      id: "06",
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
