import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/select/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/select/basic.jsx?raw";

// 02. With label
import WithLabel from "@/features/tailwind-v4/components/ui-kit/select/with-label";
import WithLabelRaw from "@/features/tailwind-v4/components/ui-kit/select/with-label.jsx?raw";

// 03. With description
import WithDescription from "@/features/tailwind-v4/components/ui-kit/select/with-description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-kit/select/with-description.jsx?raw";

// 04. Disabled state
import DisabledState from "@/features/tailwind-v4/components/ui-kit/select/disabled";
import DisabledStateRaw from "@/features/tailwind-v4/components/ui-kit/select/disabled.jsx?raw";

// 05. Validation errors
import ValidationErrors from "@/features/tailwind-v4/components/ui-kit/select/validation-errors";
import ValidationErrorsRaw from "@/features/tailwind-v4/components/ui-kit/select/validation-errors.jsx?raw";

// 06. Constraining width
import ConstrainingWidth from "@/features/tailwind-v4/components/ui-kit/select/constraining-width";
import ConstrainingWidthRaw from "@/features/tailwind-v4/components/ui-kit/select/constraining-width.jsx?raw";

// 07. With custom layout
import CustomLayout from "@/features/tailwind-v4/components/ui-kit/select/custom-layout";
import CustomLayoutRaw from "@/features/tailwind-v4/components/ui-kit/select/custom-layout.jsx?raw";

// 08. Controlled component
import Controlled from "@/features/tailwind-v4/components/ui-kit/select/controlled";
import ControlledRaw from "@/features/tailwind-v4/components/ui-kit/select/controlled.jsx?raw";

const mockErrors = {
  has: (field) => field === "status",
  get: (field) => "Trường này là bắt buộc!",
};

const Page = () => {
  const layouts = [
    { id: "01", name: "Basic", component: <Basic />, raw: BasicRaw },
    {
      id: "02",
      name: "With Label",
      component: <WithLabel />,
      raw: WithLabelRaw,
    },
    {
      id: "03",
      name: "With Description",
      component: <WithDescription />,
      raw: WithDescriptionRaw,
    },
    {
      id: "04",
      name: "Disabled State",
      component: <DisabledState />,
      raw: DisabledStateRaw,
    },
    {
      id: "05",
      name: "Validation Errors",
      component: <ValidationErrors errors={mockErrors} />,
      raw: ValidationErrorsRaw,
    },
    {
      id: "06",
      name: "Constraining Width",
      component: <ConstrainingWidth />,
      raw: ConstrainingWidthRaw,
    },
    {
      id: "07",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: CustomLayoutRaw,
    },
    {
      id: "08",
      name: "Controlled Component",
      component: <Controlled />,
      raw: ControlledRaw,
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
            <div className="flex min-h-[150px] items-center justify-center py-6">
              <div className="w-full max-w-sm">{layout.component}</div>
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
