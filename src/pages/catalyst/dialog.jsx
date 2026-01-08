import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/components/ui-kit/dialog/basic";
import BasicRaw from "@/components/blocks/dialog/basic.jsx?raw";

// 02. Dialog width
import DialogWidth from "@/components/ui-kit/dialog/dialog-width";
import DialogWidthRaw from "@/components/blocks/dialog/dialog-width.jsx?raw";

// 03. Opening from dropdown
import FromDropdown from "@/components/ui-kit/dialog/from-dropdown";
import FromDropdownRaw from "@/components/blocks/dialog/from-dropdown.jsx?raw";

// 04. Auto-focusing elements
import AutoFocus from "@/components/ui-kit/dialog/auto-focus";
import AutoFocusRaw from "@/components/blocks/dialog/auto-focus.jsx?raw";

// 05. With scrolling content
import ScrollingContent from "@/components/ui-kit/dialog/scrolling-content";
import ScrollingContentRaw from "@/components/blocks/dialog/scrolling-content.jsx?raw";

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
