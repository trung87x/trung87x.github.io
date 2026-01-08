import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/alert/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/alert/basic.jsx?raw";

// 02. Alert width
import AlertWidth from "@/features/tailwind-v4/components/ui-kit/alert/alert-width";
import AlertWidthRaw from "@/features/tailwind-v4/components/ui-kit/alert/alert-width.jsx?raw";

// 03. With body
import WithBody from "@/features/tailwind-v4/components/ui-kit/alert/with-body";
import WithBodyRaw from "@/features/tailwind-v4/components/ui-kit/alert/with-body.jsx?raw";

// 04. Auto-focusing elements
import AutoFocus from "@/features/tailwind-v4/components/ui-kit/alert/auto-focusing";
import AutoFocusRaw from "@/features/tailwind-v4/components/ui-kit/alert/auto-focusing.jsx?raw";

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
      name: "Alert Width",
      component: <AlertWidth />,
      raw: AlertWidthRaw,
    },
    {
      id: "03",
      name: "With Body",
      component: <WithBody />,
      raw: WithBodyRaw,
    },
    {
      id: "04",
      name: "Auto-focusing Elements",
      component: <AutoFocus />,
      raw: AutoFocusRaw,
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
