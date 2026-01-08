import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 00. Stacked layout
import StackedLayout from "@/features/tailwind-v4/components/ui-kit/stacked-layout/stacked-layout";
import StackedLayoutRaw from "@/features/tailwind-v4/components/ui-kit/stacked-layout/stacked-layout.jsx?raw";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/stacked-layout/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/stacked-layout/basic.jsx?raw";

const Page = () => {
  // Hàm helper để tạo nội dung giả cho phần children của Layout
  const DummyContent = ({ title }) => (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-zinc-950">{title}</h3>
      <p className="mt-2 text-zinc-600">
        Chào Trung, đây là nội dung trang web (children) được hiển thị bên trong
        Layout.
      </p>
      <div className="mt-6 h-40 rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50" />
    </div>
  );

  const layouts = [
    {
      id: "00",
      name: "Sidebar Layout",
      component: (
        <StackedLayout>
          <DummyContent title="Dashboard Overview" />
        </StackedLayout>
      ),
      raw: StackedLayoutRaw,
    },
    {
      id: "01",
      name: "Basic Sidebar Layout",
      // Sửa: Phải bọc nội dung vào giữa thẻ <Basic> ... </Basic>
      component: (
        <Basic>
          <DummyContent title="Dashboard Overview" />
        </Basic>
      ),
      raw: BasicRaw,
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
