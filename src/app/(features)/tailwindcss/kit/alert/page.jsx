import PreviewWrapper from "@/lib/utils/preview-wrapper";
import { getRaw } from "@/lib/utils/get-raw";

// 01. Basic
import Basic from "./basic";

// 02. Alert width
import AlertWidth from "./alert-width";

// 03. With body
import WithBody from "./with-body";

// 04. Auto-focusing elements
import AutoFocus from "./auto-focusing";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic />,
      raw: getRaw("src/app/(features)/tailwindcss/kit/alert/basic.jsx"),
    },
    {
      id: "02",
      name: "Alert Width",
      component: <AlertWidth />,
      raw: getRaw("src/app/(features)/tailwindcss/kit/alert/alert-width.jsx"),
    },
    {
      id: "03",
      name: "With Body",
      component: <WithBody />,
      raw: getRaw("src/app/(features)/tailwindcss/kit/alert/with-body.jsx"),
    },
    {
      id: "04",
      name: "Auto-focusing Elements",
      component: <AutoFocus />,
      raw: getRaw("src/app/(features)/tailwindcss/kit/alert/auto-focusing.jsx"),
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
