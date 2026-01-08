import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With meta and actions
import WithMetaAndActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_meta_and_actions";
import WithMetaAndActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_meta_and_actions.jsx?raw";

// 02. With actions
import WithActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_actions";
import WithActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_actions.jsx?raw";

// 03. With actions and breadcrumbs
import WithActionsAndBreadcrumbs from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_actions_and_breadcrumbs";
import WithActionsAndBreadcrumbsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_actions_and_breadcrumbs.jsx?raw";

// 04. With banner image
import WithBannerImage from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_banner_image";
import WithBannerImageRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_banner_image.jsx?raw";

// 05. With avatar and actions
import WithAvatarAndActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_avatar_and_actions";
import WithAvatarAndActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_avatar_and_actions.jsx?raw";

// 06. Card with avatar and stats
import CardWithAvatarAndStats from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/card_with_avatar_and_stats";
import CardWithAvatarAndStatsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/card_with_avatar_and_stats.jsx?raw";

// 07. With meta, actions, and breadcrumbs
import WithMetaActionsAndBreadcrumbs from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_meta__actions__and_breadcrumbs";
import WithMetaActionsAndBreadcrumbsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_meta__actions__and_breadcrumbs.jsx?raw";

// 08. With filters and action
import WithFiltersAndAction from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_filters_and_action";
import WithFiltersAndActionRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_filters_and_action.jsx?raw";

// 09. With logo, meta and actions
import WithLogoMetaAndActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_logo__meta_and_actions";
import WithLogoMetaAndActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/headings/page-headings/with_logo__meta_and_actions.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const PageHeadingsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With meta and actions",
      component: <WithMetaAndActions />,
      raw: WithMetaAndActionsRaw,
    },
    {
      id: "02",
      name: "With actions",
      component: <WithActions />,
      raw: WithActionsRaw,
    },
    {
      id: "03",
      name: "With actions and breadcrumbs",
      component: <WithActionsAndBreadcrumbs />,
      raw: WithActionsAndBreadcrumbsRaw,
    },
    {
      id: "04",
      name: "With banner image",
      component: <WithBannerImage />,
      raw: WithBannerImageRaw,
    },
    {
      id: "05",
      name: "With avatar and actions",
      component: <WithAvatarAndActions />,
      raw: WithAvatarAndActionsRaw,
    },
    {
      id: "06",
      name: "Card with avatar and stats",
      component: <CardWithAvatarAndStats />,
      raw: CardWithAvatarAndStatsRaw,
    },
    {
      id: "07",
      name: "With meta, actions, and breadcrumbs",
      component: <WithMetaActionsAndBreadcrumbs />,
      raw: WithMetaActionsAndBreadcrumbsRaw,
    },
    {
      id: "08",
      name: "With filters and action",
      component: <WithFiltersAndAction />,
      raw: WithFiltersAndActionRaw,
    },
    {
      id: "09",
      name: "With logo, meta and actions",
      component: <WithLogoMetaAndActions />,
      raw: WithLogoMetaAndActionsRaw,
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

export default PageHeadingsDemoPage;
