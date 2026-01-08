import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/pagination/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/pagination/basic.jsx?raw";

// 02. Disabling previous/next links
import DisabledLinks from "@/features/tailwind-v4/components/ui-kit/pagination/disabled-links";
import DisabledLinksRaw from "@/features/tailwind-v4/components/ui-kit/pagination/disabled-links.jsx?raw";

// 03. Current page active state
import ActiveState from "@/features/tailwind-v4/components/ui-kit/pagination/active-state";
import ActiveStateRaw from "@/features/tailwind-v4/components/ui-kit/pagination/active-state.jsx?raw";

// 04. Without page links
import WithoutPageLinks from "@/features/tailwind-v4/components/ui-kit/pagination/no-page-links";
import WithoutPageLinksRaw from "@/features/tailwind-v4/components/ui-kit/pagination/no-page-links.jsx?raw";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Pagination",
      component: <Basic />,
      raw: BasicRaw,
    },
    {
      id: "02",
      name: "Disabling Previous/Next Links",
      component: <DisabledLinks />,
      raw: DisabledLinksRaw,
    },
    {
      id: "03",
      name: "Current Page Active State",
      component: <ActiveState />,
      raw: ActiveStateRaw,
    },
    {
      id: "04",
      name: "Without Page Links",
      component: <WithoutPageLinks />,
      raw: WithoutPageLinksRaw,
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
            <div className="flex justify-center py-8">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
