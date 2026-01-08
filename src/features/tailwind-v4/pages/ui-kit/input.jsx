import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/input/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/input/basic.jsx?raw";

// 02. With label
import WithLabel from "@/features/tailwind-v4/components/ui-kit/input/with-label";
import WithLabelRaw from "@/features/tailwind-v4/components/ui-kit/input/with-label.jsx?raw";

// 03. With description
import WithDescription from "@/features/tailwind-v4/components/ui-kit/input/with-description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-kit/input/with-description.jsx?raw";

// 04. With icon
import WithIcon from "@/features/tailwind-v4/components/ui-kit/input/with-icon";
import WithIconRaw from "@/features/tailwind-v4/components/ui-kit/input/with-icon.jsx?raw";

// 05. Setting the type
import SettingType from "@/features/tailwind-v4/components/ui-kit/input/setting-type";
import SettingTypeRaw from "@/features/tailwind-v4/components/ui-kit/input/setting-type.jsx?raw";

// 06. Disabled state
import DisabledState from "@/features/tailwind-v4/components/ui-kit/input/disabled";
import DisabledStateRaw from "@/features/tailwind-v4/components/ui-kit/input/disabled.jsx?raw";

// 07. Validation errors
import ValidationErrors from "@/features/tailwind-v4/components/ui-kit/input/validation-errors";
import ValidationErrorsRaw from "@/features/tailwind-v4/components/ui-kit/input/validation-errors.jsx?raw";

// 08. Constraining width
import ConstrainingWidth from "@/features/tailwind-v4/components/ui-kit/input/constraining-width";
import ConstrainingWidthRaw from "@/features/tailwind-v4/components/ui-kit/input/constraining-width.jsx?raw";

// 09. With custom layout
import CustomLayout from "@/features/tailwind-v4/components/ui-kit/input/custom-layout";
import CustomLayoutRaw from "@/features/tailwind-v4/components/ui-kit/input/custom-layout.jsx?raw";

// 10. Controlled component
import ControlledComponent from "@/features/tailwind-v4/components/ui-kit/input/controlled";
import ControlledComponentRaw from "@/features/tailwind-v4/components/ui-kit/input/controlled.jsx?raw";

const mockErrors = new Map([
  ["full_name", "Họ và tên là bắt buộc và không được để trống."],
  ["email", "Địa chỉ email không hợp lệ."],
]);

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
    { id: "04", name: "With Icon", component: <WithIcon />, raw: WithIconRaw },
    {
      id: "05",
      name: "Setting the Type",
      component: <SettingType />,
      raw: SettingTypeRaw,
    },
    {
      id: "06",
      name: "Disabled State",
      component: <DisabledState />,
      raw: DisabledStateRaw,
    },
    {
      id: "07",
      name: "Validation Errors",
      component: <ValidationErrors errors={mockErrors} />,
      raw: ValidationErrorsRaw,
    },
    {
      id: "08",
      name: "Constraining Width",
      component: <ConstrainingWidth />,
      raw: ConstrainingWidthRaw,
    },
    {
      id: "09",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: CustomLayoutRaw,
    },
    {
      id: "10",
      name: "Controlled Component",
      component: <ControlledComponent />,
      raw: ControlledComponentRaw,
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
            <div className="mx-auto max-w-xl py-4">{layout.component}</div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
