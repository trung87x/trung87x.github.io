import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/description-list/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/description-list/basic.jsx?raw";

// 02. With heading
import WithHeading from "@/features/tailwind-v4/components/ui-kit/description-list/with-heading";
import WithHeadingRaw from "@/features/tailwind-v4/components/ui-kit/description-list/with-heading.jsx?raw";

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
      name: "With Heading",
      component: <WithHeading />,
      raw: WithHeadingRaw,
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
