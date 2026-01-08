import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple with icons
import SimpleWithIcons from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/feeds/simple_with_icons";
import SimpleWithIconsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/feeds/simple_with_icons.jsx?raw";

// 02. With comments
import WithComments from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/feeds/with_comments";
import WithCommentsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/feeds/with_comments.jsx?raw";

// 03. With multiple item types
import WithMultipleItemTypes from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/feeds/with_multiple_item_types";
import WithMultipleItemTypesRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/feeds/with_multiple_item_types.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const FeedsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple with icons",
      component: <SimpleWithIcons />,
      raw: SimpleWithIconsRaw,
    },
    {
      id: "02",
      name: "With comments",
      component: <WithComments />,
      raw: WithCommentsRaw,
    },
    {
      id: "03",
      name: "With multiple item types",
      component: <WithMultipleItemTypes />,
      raw: WithMultipleItemTypesRaw,
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

export default FeedsDemoPage;
