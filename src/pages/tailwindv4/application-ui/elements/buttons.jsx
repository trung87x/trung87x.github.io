import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Primary buttons
import PrimaryButtons from "@/component-plus/application-ui/elements/buttons/primary_buttons";
import PrimaryButtonsRaw from "@/component-plus/application-ui/elements/buttons/primary_buttons.jsx?raw";

// 02. Secondary buttons
import SecondaryButtons from "@/component-plus/application-ui/elements/buttons/secondary_buttons";
import SecondaryButtonsRaw from "@/component-plus/application-ui/elements/buttons/secondary_buttons.jsx?raw";

// 03. Soft buttons
import SoftButtons from "@/component-plus/application-ui/elements/buttons/soft_buttons";
import SoftButtonsRaw from "@/component-plus/application-ui/elements/buttons/soft_buttons.jsx?raw";

// 04. Buttons with leading icon
import ButtonsWithLeadingIcon from "@/component-plus/application-ui/elements/buttons/buttons_with_leading_icon";
import ButtonsWithLeadingIconRaw from "@/component-plus/application-ui/elements/buttons/buttons_with_leading_icon.jsx?raw";

// 05. Buttons with trailing icon
import ButtonsWithTrailingIcon from "@/component-plus/application-ui/elements/buttons/buttons_with_trailing_icon";
import ButtonsWithTrailingIconRaw from "@/component-plus/application-ui/elements/buttons/buttons_with_trailing_icon.jsx?raw";

// 06. Rounded primary buttons
import RoundedPrimaryButtons from "@/component-plus/application-ui/elements/buttons/rounded_primary_buttons";
import RoundedPrimaryButtonsRaw from "@/component-plus/application-ui/elements/buttons/rounded_primary_buttons.jsx?raw";

// 07. Rounded secondary buttons
import RoundedSecondaryButtons from "@/component-plus/application-ui/elements/buttons/rounded_secondary_buttons";
import RoundedSecondaryButtonsRaw from "@/component-plus/application-ui/elements/buttons/rounded_secondary_buttons.jsx?raw";

// 08. Circular buttons
import CircularButtons from "@/component-plus/application-ui/elements/buttons/circular_buttons";
import CircularButtonsRaw from "@/component-plus/application-ui/elements/buttons/circular_buttons.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ButtonsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Primary buttons",
      component: <PrimaryButtons />,
      raw: PrimaryButtonsRaw,
    },
    {
      id: "02",
      name: "Secondary buttons",
      component: <SecondaryButtons />,
      raw: SecondaryButtonsRaw,
    },
    {
      id: "03",
      name: "Soft buttons",
      component: <SoftButtons />,
      raw: SoftButtonsRaw,
    },
    {
      id: "04",
      name: "Buttons with leading icon",
      component: <ButtonsWithLeadingIcon />,
      raw: ButtonsWithLeadingIconRaw,
    },
    {
      id: "05",
      name: "Buttons with trailing icon",
      component: <ButtonsWithTrailingIcon />,
      raw: ButtonsWithTrailingIconRaw,
    },
    {
      id: "06",
      name: "Rounded primary buttons",
      component: <RoundedPrimaryButtons />,
      raw: RoundedPrimaryButtonsRaw,
    },
    {
      id: "07",
      name: "Rounded secondary buttons",
      component: <RoundedSecondaryButtons />,
      raw: RoundedSecondaryButtonsRaw,
    },
    {
      id: "08",
      name: "Circular buttons",
      component: <CircularButtons />,
      raw: CircularButtonsRaw,
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

export default ButtonsDemoPage;
