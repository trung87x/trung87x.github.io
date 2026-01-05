import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/component-plus/application-ui/navigation/progress-bars/simple";
import SimpleRaw from "@/component-plus/application-ui/navigation/progress-bars/simple.jsx?raw";

// 02. Panels
import Panels from "@/component-plus/application-ui/navigation/progress-bars/panels";
import PanelsRaw from "@/component-plus/application-ui/navigation/progress-bars/panels.jsx?raw";

// 03. Bullets
import Bullets from "@/component-plus/application-ui/navigation/progress-bars/bullets";
import BulletsRaw from "@/component-plus/application-ui/navigation/progress-bars/bullets.jsx?raw";

// 04. Panels with border
import PanelsWithBorder from "@/component-plus/application-ui/navigation/progress-bars/panels_with_border";
import PanelsWithBorderRaw from "@/component-plus/application-ui/navigation/progress-bars/panels_with_border.jsx?raw";

// 05. Circles
import Circles from "@/component-plus/application-ui/navigation/progress-bars/circles";
import CirclesRaw from "@/component-plus/application-ui/navigation/progress-bars/circles.jsx?raw";

// 06. Bullets and text
import BulletsAndText from "@/component-plus/application-ui/navigation/progress-bars/bullets_and_text";
import BulletsAndTextRaw from "@/component-plus/application-ui/navigation/progress-bars/bullets_and_text.jsx?raw";

// 07. Circles with text
import CirclesWithText from "@/component-plus/application-ui/navigation/progress-bars/circles_with_text";
import CirclesWithTextRaw from "@/component-plus/application-ui/navigation/progress-bars/circles_with_text.jsx?raw";

// 08. Progress bar
import ProgressBar from "@/component-plus/application-ui/navigation/progress-bars/progress_bar";
import ProgressBarRaw from "@/component-plus/application-ui/navigation/progress-bars/progress_bar.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ProgressBarsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "Panels",
      component: <Panels />,
      raw: PanelsRaw,
    },
    {
      id: "03",
      name: "Bullets",
      component: <Bullets />,
      raw: BulletsRaw,
    },
    {
      id: "04",
      name: "Panels with border",
      component: <PanelsWithBorder />,
      raw: PanelsWithBorderRaw,
    },
    {
      id: "05",
      name: "Circles",
      component: <Circles />,
      raw: CirclesRaw,
    },
    {
      id: "06",
      name: "Bullets and text",
      component: <BulletsAndText />,
      raw: BulletsAndTextRaw,
    },
    {
      id: "07",
      name: "Circles with text",
      component: <CirclesWithText />,
      raw: CirclesWithTextRaw,
    },
    {
      id: "08",
      name: "Progress bar",
      component: <ProgressBar />,
      raw: ProgressBarRaw,
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

export default ProgressBarsDemoPage;
