import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Stacked
import Stacked from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/form-layouts/stacked";
import StackedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/form-layouts/stacked.jsx?raw";

// 02. Two-column
import TwoColumn from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/form-layouts/two_column";
import TwoColumnRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/form-layouts/two_column.jsx?raw";

// 03. Two-column with cards
import TwoColumnWithCards from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/form-layouts/two_column_with_cards";
import TwoColumnWithCardsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/form-layouts/two_column_with_cards.jsx?raw";

// 04. Labels on left
import LabelsOnLeft from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/form-layouts/labels_on_left";
import LabelsOnLeftRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/forms/form-layouts/labels_on_left.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const FormLayoutsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Stacked",
      component: <Stacked />,
      raw: StackedRaw,
    },
    {
      id: "02",
      name: "Two-column",
      component: <TwoColumn />,
      raw: TwoColumnRaw,
    },
    {
      id: "03",
      name: "Two-column with cards",
      component: <TwoColumnWithCards />,
      raw: TwoColumnWithCardsRaw,
    },
    {
      id: "04",
      name: "Labels on left",
      component: <LabelsOnLeft />,
      raw: LabelsOnLeftRaw,
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

export default FormLayoutsDemoPage;
