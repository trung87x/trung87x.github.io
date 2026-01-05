import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. With trending
import WithTrending from "@/component-plus/application-ui/data-display/stats/with_trending";
import WithTrendingRaw from "@/component-plus/application-ui/data-display/stats/with_trending.jsx?raw";

// 02. Simple
import Simple from "@/component-plus/application-ui/data-display/stats/simple_on_dark";
import SimpleRaw from "@/component-plus/application-ui/data-display/stats/simple_on_dark.jsx?raw";

// 03. Simple in cards
import SimpleInCards from "@/component-plus/application-ui/data-display/stats/simple_in_cards";
import SimpleInCardsRaw from "@/component-plus/application-ui/data-display/stats/simple_in_cards.jsx?raw";

// 04. With brand icon
import WithBrandIcon from "@/component-plus/application-ui/data-display/stats/with_brand_icon";
import WithBrandIconRaw from "@/component-plus/application-ui/data-display/stats/with_brand_icon.jsx?raw";

// 05. With shared borders
import WithSharedBorders from "@/component-plus/application-ui/data-display/stats/with_shared_borders";
import WithSharedBordersRaw from "@/component-plus/application-ui/data-display/stats/with_shared_borders.jsx?raw";

const StatsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With trending",
      component: <WithTrending />,
      raw: WithTrendingRaw,
    },
    {
      id: "02",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "03",
      name: "Simple in cards",
      component: <SimpleInCards />,
      raw: SimpleInCardsRaw,
    },
    {
      id: "04",
      name: "With brand icon",
      component: <WithBrandIcon />,
      raw: WithBrandIconRaw,
    },
    {
      id: "05",
      name: "With shared borders",
      component: <WithSharedBorders />,
      raw: WithSharedBordersRaw,
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

export default StatsDemoPage;
