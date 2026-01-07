import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/components/blocks/input/basic";
import BasicRaw from "@/components/blocks/input/basic.jsx?raw";

// 02. With label
import WithLabel from "@/components/blocks/input/with-label";
import WithLabelRaw from "@/components/blocks/input/with-label.jsx?raw";

// 03. With description
import WithDescription from "@/components/blocks/input/with-description";
import WithDescriptionRaw from "@/components/blocks/input/with-description.jsx?raw";

// 04. With icon
import WithIcon from "@/components/blocks/input/with-icon";
import WithIconRaw from "@/components/blocks/input/with-icon.jsx?raw";

// 05. Setting the type
import SettingType from "@/components/blocks/input/setting-type";
import SettingTypeRaw from "@/components/blocks/input/setting-type.jsx?raw";

// 06. Disabled state
import DisabledState from "@/components/blocks/input/disabled";
import DisabledStateRaw from "@/components/blocks/input/disabled.jsx?raw";

// 07. Validation errors
import ValidationErrors from "@/components/blocks/input/validation-errors";
import ValidationErrorsRaw from "@/components/blocks/input/validation-errors.jsx?raw";

// 08. Constraining width
import ConstrainingWidth from "@/components/blocks/input/constraining-width";
import ConstrainingWidthRaw from "@/components/blocks/input/constraining-width.jsx?raw";

// 09. With custom layout
import CustomLayout from "@/components/blocks/input/custom-layout";
import CustomLayoutRaw from "@/components/blocks/input/custom-layout.jsx?raw";

// 10. Controlled component
import ControlledComponent from "@/components/blocks/input/controlled";
import ControlledComponentRaw from "@/components/blocks/input/controlled.jsx?raw";

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
