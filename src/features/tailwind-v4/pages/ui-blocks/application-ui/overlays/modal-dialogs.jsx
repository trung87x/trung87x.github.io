import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple with gray footer
import SimpleWithGrayFooter from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/simple_with_gray_footer";
import SimpleWithGrayFooterRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/simple_with_gray_footer.jsx?raw";

// 02. Centered with single action
import CenteredWithSingleAction from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/centered_with_single_action";
import CenteredWithSingleActionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/centered_with_single_action.jsx?raw";

// 03. Centered with wide buttons
import CenteredWithWideButtons from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/centered_with_wide_buttons";
import CenteredWithWideButtonsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/centered_with_wide_buttons.jsx?raw";

// 04. Simple alert
import SimpleAlert from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/simple_alert";
import SimpleAlertRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/simple_alert.jsx?raw";

// 05. Simple with dismiss button
import SimpleWithDismissButton from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/simple_with_dismiss_button";
import SimpleWithDismissButtonRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/simple_with_dismiss_button.jsx?raw";

// 06. Simple alert with left-aligned buttons
import SimpleAlertWithLeftAlignedButtons from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/simple_alert_with_left_aligned_buttons";
import SimpleAlertWithLeftAlignedButtonsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/overlays/modal-dialogs/simple_alert_with_left_aligned_buttons.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ModalDialogsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple with gray footer",
      component: <SimpleWithGrayFooter />,
      raw: SimpleWithGrayFooterRaw,
    },
    {
      id: "02",
      name: "Centered with single action",
      component: <CenteredWithSingleAction />,
      raw: CenteredWithSingleActionRaw,
    },
    {
      id: "03",
      name: "Centered with wide buttons",
      component: <CenteredWithWideButtons />,
      raw: CenteredWithWideButtonsRaw,
    },
    {
      id: "04",
      name: "Simple alert",
      component: <SimpleAlert />,
      raw: SimpleAlertRaw,
    },
    {
      id: "05",
      name: "Simple with dismiss button",
      component: <SimpleWithDismissButton />,
      raw: SimpleWithDismissButtonRaw,
    },
    {
      id: "06",
      name: "Simple alert with left-aligned buttons",
      component: <SimpleAlertWithLeftAlignedButtons />,
      raw: SimpleAlertWithLeftAlignedButtonsRaw,
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

export default ModalDialogsDemoPage;
