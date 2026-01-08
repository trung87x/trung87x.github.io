import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Multi-column
import MultiColumn from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/reviews/multi_column";
import MultiColumnRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/reviews/multi_column.jsx?raw";

// 02. With summary chart
import WithSummaryChart from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/reviews/with_summary_chart";
import WithSummaryChartRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/reviews/with_summary_chart.jsx?raw";

// 03. Avatars with separate description
import AvatarsWithSeparateDescription from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/reviews/avatars_with_separate_description";
import AvatarsWithSeparateDescriptionRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/reviews/avatars_with_separate_description.jsx?raw";

// 04. Simple with avatars
import SimpleWithAvatars from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/reviews/simple_with_avatars";
import SimpleWithAvatarsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/reviews/simple_with_avatars.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ReviewsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Multi-column",
      component: <MultiColumn />,
      raw: MultiColumnRaw,
    },
    {
      id: "02",
      name: "With summary chart",
      component: <WithSummaryChart />,
      raw: WithSummaryChartRaw,
    },
    {
      id: "03",
      name: "Avatars with separate description",
      component: <AvatarsWithSeparateDescription />,
      raw: AvatarsWithSeparateDescriptionRaw,
    },
    {
      id: "04",
      name: "Simple with avatars",
      component: <SimpleWithAvatars />,
      raw: SimpleWithAvatarsRaw,
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

export default ReviewsDemoPage;
