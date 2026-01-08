import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic heading
import BasicHeading from "@/features/tailwind-v4/components/ui-kit/heading/basic-heading";
import BasicHeadingRaw from "@/features/tailwind-v4/components/ui-kit/heading/basic-heading.jsx?raw";

// 02. Basic subheading
import BasicSubheading from "@/features/tailwind-v4/components/ui-kit/heading/basic-subheading";
import BasicSubheadingRaw from "@/features/tailwind-v4/components/ui-kit/heading/basic-subheading.jsx?raw";

// 03. With custom level
import CustomLevel from "@/features/tailwind-v4/components/ui-kit/heading/custom-level";
import CustomLevelRaw from "@/features/tailwind-v4/components/ui-kit/heading/custom-level.jsx?raw";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Heading",
      component: <BasicHeading />,
      raw: BasicHeadingRaw,
    },
    {
      id: "02",
      name: "Basic Subheading",
      component: <BasicSubheading />,
      raw: BasicSubheadingRaw,
    },
    {
      id: "03",
      name: "With Custom Level",
      component: <CustomLevel />,
      raw: CustomLevelRaw,
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
