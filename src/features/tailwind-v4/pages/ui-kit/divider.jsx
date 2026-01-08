import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/divider/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/divider/basic.jsx?raw";

// 02. With reduced contrast
import ReducedContrast from "@/features/tailwind-v4/components/ui-kit/divider/reduced-contrast";
import ReducedContrastRaw from "@/features/tailwind-v4/components/ui-kit/divider/reduced-contrast.jsx?raw";

// 03. With spacing
import WithSpacing from "@/features/tailwind-v4/components/ui-kit/divider/with-spacing";
import WithSpacingRaw from "@/features/tailwind-v4/components/ui-kit/divider/with-spacing.jsx?raw";

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
      name: "With reduced contrast",
      component: <ReducedContrast />,
      raw: ReducedContrastRaw,
    },
    {
      id: "03",
      name: "With spacing",
      component: <WithSpacing />,
      raw: WithSpacingRaw,
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
