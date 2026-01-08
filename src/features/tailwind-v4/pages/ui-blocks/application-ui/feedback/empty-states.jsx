import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/simple.jsx?raw";

// 02. With dashed border
import WithDashedBorder from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_dashed_border";
import WithDashedBorderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_dashed_border.jsx?raw";

// 03. With starting points
import WithStartingPoints from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_starting_points";
import WithStartingPointsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_starting_points.jsx?raw";

// 04. With recommendations
import WithRecommendations from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_recommendations";
import WithRecommendationsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_recommendations.jsx?raw";

// 05. With templates
import WithTemplates from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_templates";
import WithTemplatesRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_templates.jsx?raw";

// 06. With recommendations grid
import WithRecommendationsGrid from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_recommendations_grid";
import WithRecommendationsGridRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/feedback/empty-states/with_recommendations_grid.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const EmptyStatesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "With dashed border",
      component: <WithDashedBorder />,
      raw: WithDashedBorderRaw,
    },
    {
      id: "03",
      name: "With starting points",
      component: <WithStartingPoints />,
      raw: WithStartingPointsRaw,
    },
    {
      id: "04",
      name: "With recommendations",
      component: <WithRecommendations />,
      raw: WithRecommendationsRaw,
    },
    {
      id: "05",
      name: "With templates",
      component: <WithTemplates />,
      raw: WithTemplatesRaw,
    },
    {
      id: "06",
      name: "With recommendations grid",
      component: <WithRecommendationsGrid />,
      raw: WithRecommendationsGridRaw,
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

export default EmptyStatesDemoPage;
