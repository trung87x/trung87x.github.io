import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Custom with avatar
import CustomWithAvatar from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/custom_with_avatar";
import CustomWithAvatarRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/custom_with_avatar.jsx?raw";

// 02. Simple native
import SimpleNative from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/simple_native";
import SimpleNativeRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/simple_native.jsx?raw";

// 03. Simple custom
import SimpleCustom from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/simple_custom";
import SimpleCustomRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/simple_custom.jsx?raw";

// 04. Custom with check on left
import CustomWithCheckOnLeft from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/custom_with_check_on_left";
import CustomWithCheckOnLeftRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/custom_with_check_on_left.jsx?raw";

// 05. Custom with status indicator
import CustomWithStatusIndicator from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/custom_with_status_indicator";
import CustomWithStatusIndicatorRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/custom_with_status_indicator.jsx?raw";

// 06. With secondary text
import WithSecondaryText from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/with_secondary_text";
import WithSecondaryTextRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/with_secondary_text.jsx?raw";

// 07. Branded with supported text
import BrandedWithSupportedText from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/branded_with_supported_text";
import BrandedWithSupportedTextRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/select-menus/branded_with_supported_text.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const SelectMenusDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Custom with avatar",
      component: <CustomWithAvatar />,
      raw: CustomWithAvatarRaw,
    },
    {
      id: "02",
      name: "Simple native",
      component: <SimpleNative />,
      raw: SimpleNativeRaw,
    },
    {
      id: "03",
      name: "Simple custom",
      component: <SimpleCustom />,
      raw: SimpleCustomRaw,
    },
    {
      id: "04",
      name: "Custom with check on left",
      component: <CustomWithCheckOnLeft />,
      raw: CustomWithCheckOnLeftRaw,
    },
    {
      id: "05",
      name: "Custom with status indicator",
      component: <CustomWithStatusIndicator />,
      raw: CustomWithStatusIndicatorRaw,
    },
    {
      id: "06",
      name: "With secondary text",
      component: <WithSecondaryText />,
      raw: WithSecondaryTextRaw,
    },
    {
      id: "07",
      name: "Branded with supported text",
      component: <BrandedWithSupportedText />,
      raw: BrandedWithSupportedTextRaw,
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section key={layout.id}>
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

export default SelectMenusDemoPage;
