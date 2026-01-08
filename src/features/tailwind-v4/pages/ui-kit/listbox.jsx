import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/listbox/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/listbox/basic.jsx?raw";

// 02. With label
import WithLabel from "@/features/tailwind-v4/components/ui-kit/listbox/with-label";
import WithLabelRaw from "@/features/tailwind-v4/components/ui-kit/listbox/with-label.jsx?raw";

// 03. With description
import WithDescription from "@/features/tailwind-v4/components/ui-kit/listbox/with-description";
import WithDescriptionRaw from "@/features/tailwind-v4/components/ui-kit/listbox/with-description.jsx?raw";

// 04. With placeholder
import WithPlaceholder from "@/features/tailwind-v4/components/ui-kit/listbox/with-placeholder";
import WithPlaceholderRaw from "@/features/tailwind-v4/components/ui-kit/listbox/with-placeholder.jsx?raw";

// 05. With avatars
import WithAvatars from "@/features/tailwind-v4/components/ui-kit/listbox/with-avatars";
import WithAvatarsRaw from "@/features/tailwind-v4/components/ui-kit/listbox/with-avatars.jsx?raw";

// 06. With icons
import WithIcons from "@/features/tailwind-v4/components/ui-kit/listbox/with-icons";
import WithIconsRaw from "@/features/tailwind-v4/components/ui-kit/listbox/with-icons.jsx?raw";

// 07. With flags
import WithFlags from "@/features/tailwind-v4/components/ui-kit/listbox/with-flags";
import WithFlagsRaw from "@/features/tailwind-v4/components/ui-kit/listbox/with-flags.jsx?raw";

// 08. With secondary text
import SecondaryText from "@/features/tailwind-v4/components/ui-kit/listbox/secondary-text";
import SecondaryTextRaw from "@/features/tailwind-v4/components/ui-kit/listbox/secondary-text.jsx?raw";

// 09. Disabled state
import DisabledState from "@/features/tailwind-v4/components/ui-kit/listbox/disabled";
import DisabledStateRaw from "@/features/tailwind-v4/components/ui-kit/listbox/disabled.jsx?raw";

// 10. Validation errors
import ValidationErrors from "@/features/tailwind-v4/components/ui-kit/listbox/validation-errors";
import ValidationErrorsRaw from "@/features/tailwind-v4/components/ui-kit/listbox/validation-errors.jsx?raw";

// 11. Constraining width
import ConstrainingWidth from "@/features/tailwind-v4/components/ui-kit/listbox/constraining-width";
import ConstrainingWidthRaw from "@/features/tailwind-v4/components/ui-kit/listbox/constraining-width.jsx?raw";

// 12. With custom layout
import CustomLayout from "@/features/tailwind-v4/components/ui-kit/listbox/custom-layout";
import CustomLayoutRaw from "@/features/tailwind-v4/components/ui-kit/listbox/custom-layout.jsx?raw";

// 13. Controlled component
import Controlled from "@/features/tailwind-v4/components/ui-kit/listbox/controlled";
import ControlledRaw from "@/features/tailwind-v4/components/ui-kit/listbox/controlled.jsx?raw";

const mockUsers = [
  {
    id: 1,
    name: "Đinh Trung",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "DT",
  },
  {
    id: 2,
    name: "Erica Hancock",
    avatarUrl: null, // Test trường hợp không có ảnh để hiện Initials
    initials: "EH",
  },
  {
    id: 3,
    name: "Giao Giao",
    avatarUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "GG",
  },
];

const mockCountries = [
  { code: "VN", name: "Vietnam" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
];

const defaultCountry = "VN";

const mockErrors = new Map([
  ["status", "Vui lòng chọn trạng thái dự án để tiếp tục."],
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
    {
      id: "04",
      name: "With Placeholder",
      component: <WithPlaceholder />,
      raw: WithPlaceholderRaw,
    },
    {
      id: "05",
      name: "With Avatars",
      component: <WithAvatars users={mockUsers} />,
      raw: WithAvatarsRaw,
    },
    {
      id: "06",
      name: "With Icons",
      component: <WithIcons />,
      raw: WithIconsRaw,
    },
    {
      id: "07",
      name: "With Flags",
      component: (
        <WithFlags currentCountry={defaultCountry} countries={mockCountries} />
      ),
      raw: WithFlagsRaw,
    },
    {
      id: "08",
      name: "With Secondary Text",
      component: <SecondaryText users={mockUsers} />,
      raw: SecondaryTextRaw,
    },
    {
      id: "09",
      name: "Disabled State",
      component: <DisabledState />,
      raw: DisabledStateRaw,
    },
    {
      id: "10",
      name: "Validation Errors",
      component: <ValidationErrors errors={mockErrors} />,
      raw: ValidationErrorsRaw,
    },
    {
      id: "11",
      name: "Constraining Width",
      component: <ConstrainingWidth />,
      raw: ConstrainingWidthRaw,
    },
    {
      id: "12",
      name: "With Custom Layout",
      component: <CustomLayout />,
      raw: CustomLayoutRaw,
    },
    {
      id: "13",
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
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              {layout.id}. {layout.name}
            </h2>
          </div>
          <PreviewWrapper name={layout.name} code={layout.raw}>
            {/* Thêm div bọc để căn giữa và tạo không gian cho dropdown mở ra */}
            <div className="flex min-h-[300px] justify-center pt-10">
              <div className="w-full max-w-xs">{layout.component}</div>
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
