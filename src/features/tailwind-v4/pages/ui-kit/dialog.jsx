import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/dialog/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/dialog/basic.jsx?raw";

// 02. Dialog width
import DialogWidth from "@/features/tailwind-v4/components/ui-kit/dialog/dialog-width";
import DialogWidthRaw from "@/features/tailwind-v4/components/ui-kit/dialog/dialog-width.jsx?raw";

// 03. Opening from dropdown
import FromDropdown from "@/features/tailwind-v4/components/ui-kit/dialog/from-dropdown";
import FromDropdownRaw from "@/features/tailwind-v4/components/ui-kit/dialog/from-dropdown.jsx?raw";

// 04. Auto-focusing elements
import AutoFocus from "@/features/tailwind-v4/components/ui-kit/dialog/auto-focus";
import AutoFocusRaw from "@/features/tailwind-v4/components/ui-kit/dialog/auto-focus.jsx?raw";

// 05. With scrolling content
import ScrollingContent from "@/features/tailwind-v4/components/ui-kit/dialog/scrolling-content";
import ScrollingContentRaw from "@/features/tailwind-v4/components/ui-kit/dialog/scrolling-content.jsx?raw";

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
      name: "Dialog Width",
      component: <DialogWidth />,
      raw: DialogWidthRaw,
    },
    {
      id: "03",
      name: "Opening from Dropdown",
      component: <FromDropdown />,
      raw: FromDropdownRaw,
    },
    {
      id: "04",
      name: "Auto-focusing Elements",
      component: <AutoFocus />,
      raw: AutoFocusRaw,
    },
    {
      id: "05",
      name: "With Scrolling Content",
      component: <ScrollingContent />,
      raw: ScrollingContentRaw,
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
