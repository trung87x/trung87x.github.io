import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/sign-in-forms/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/sign-in-forms/simple.jsx?raw";

// 02. Simple no labels
import SimpleNoLabels from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/sign-in-forms/simple_no_labels";
import SimpleNoLabelsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/sign-in-forms/simple_no_labels.jsx?raw";

// 03. Split screen
import SplitScreen from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/sign-in-forms/split_screen";
import SplitScreenRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/sign-in-forms/split_screen.jsx?raw";

// 04. Simple card
import SimpleCard from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/sign-in-forms/simple_card";
import SimpleCardRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/sign-in-forms/simple_card.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const SignInFormsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "Simple no labels",
      component: <SimpleNoLabels />,
      raw: SimpleNoLabelsRaw,
    },
    {
      id: "03",
      name: "Split screen",
      component: <SplitScreen />,
      raw: SplitScreenRaw,
    },
    {
      id: "04",
      name: "Simple card",
      component: <SimpleCard />,
      raw: SimpleCardRaw,
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

export default SignInFormsDemoPage;
