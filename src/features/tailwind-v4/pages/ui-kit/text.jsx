import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/text/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/text/basic.jsx?raw";

// 02. With link
import WithLink from "@/features/tailwind-v4/components/ui-kit/text/with-link";
import WithLinkRaw from "@/features/tailwind-v4/components/ui-kit/text/with-link.jsx?raw";

// 03. With strong
import WithStrong from "@/features/tailwind-v4/components/ui-kit/text/with-strong";
import WithStrongRaw from "@/features/tailwind-v4/components/ui-kit/text/with-strong.jsx?raw";

// 04. With code
import WithCode from "@/features/tailwind-v4/components/ui-kit/text/with-code";
import WithCodeRaw from "@/features/tailwind-v4/components/ui-kit/text/with-code.jsx?raw";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Text",
      component: <Basic />,
      raw: BasicRaw,
    },
    {
      id: "02",
      name: "With Link",
      component: <WithLink />,
      raw: WithLinkRaw,
    },
    {
      id: "03",
      name: "With Strong (Bold)",
      component: <WithStrong />,
      raw: WithStrongRaw,
    },
    {
      id: "04",
      name: "With Code (Inline)",
      component: <WithCode />,
      raw: WithCodeRaw,
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
            <div className="prose prose-slate max-w-none bg-white p-6">
              {layout.component}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
