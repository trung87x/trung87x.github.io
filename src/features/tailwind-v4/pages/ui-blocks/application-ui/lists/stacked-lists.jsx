import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/simple.jsx?raw";

// 02. With links
import WithLinks from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/with_links";
import WithLinksRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/with_links.jsx?raw";

// 03. With inline links and avatar group
import WithInlineLinksAvatarGroup from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/with_inline_links_and_avatar_group";
import WithInlineLinksAvatarGroupRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/with_inline_links_and_avatar_group.jsx?raw";

// 04. With inline links and actions menu
import WithInlineLinksActionsMenu from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/with_inline_links_and_actions_menu";
import WithInlineLinksActionsMenuRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/with_inline_links_and_actions_menu.jsx?raw";

// 05. With badges, button, and actions menu
import WithBadgesButtonActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/with_badges__button__and_actions_menu";
import WithBadgesButtonActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/with_badges__button__and_actions_menu.jsx?raw";

// 06. In card with links
import InCardWithLinks from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/in_card_with_links";
import InCardWithLinksRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/in_card_with_links.jsx?raw";

// 07. Two columns with links
import TwoColumnsWithLinks from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/two_columns_with_links";
import TwoColumnsWithLinksRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/two_columns_with_links.jsx?raw";

// 08. Full width with links
import FullWidthWithLinks from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/full_width_with_links";
import FullWidthWithLinksRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/full_width_with_links.jsx?raw";

// 09. Full-width with constrained content
import FullWidthConstrained from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/full_width_with_constrained_content";
import FullWidthConstrainedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/full_width_with_constrained_content.jsx?raw";

// 10. Narrow
import Narrow from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow";
import NarrowRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow.jsx?raw";

// 11. Narrow with sticky headings
import NarrowStickyHeadings from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_sticky_headings";
import NarrowStickyHeadingsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_sticky_headings.jsx?raw";

// 12. Narrow with actions
import NarrowWithActions from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_actions";
import NarrowWithActionsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_actions.jsx?raw";

// 13. Narrow with truncated content
import NarrowTruncated from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_truncated_content";
import NarrowTruncatedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_truncated_content.jsx?raw";

// 14. Narrow with small avatars
import NarrowSmallAvatars from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_small_avatars";
import NarrowSmallAvatarsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_small_avatars.jsx?raw";

// 15. Narrow with badges
import NarrowWithBadges from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_badges_on_dark";
import NarrowWithBadgesRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/stacked-lists/narrow_with_badges_on_dark.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const StackedListsDemoPage = () => {
  const layouts = [
    { id: "01", name: "Simple", component: <Simple />, raw: SimpleRaw },
    {
      id: "02",
      name: "With links",
      component: <WithLinks />,
      raw: WithLinksRaw,
    },
    {
      id: "03",
      name: "With inline links and avatar group",
      component: <WithInlineLinksAvatarGroup />,
      raw: WithInlineLinksAvatarGroupRaw,
    },
    {
      id: "04",
      name: "With inline links and actions menu",
      component: <WithInlineLinksActionsMenu />,
      raw: WithInlineLinksActionsMenuRaw,
    },
    {
      id: "05",
      name: "With badges, button, and actions menu",
      component: <WithBadgesButtonActions />,
      raw: WithBadgesButtonActionsRaw,
    },
    {
      id: "06",
      name: "In card with links",
      component: <InCardWithLinks />,
      raw: InCardWithLinksRaw,
    },
    {
      id: "07",
      name: "Two columns with links",
      component: <TwoColumnsWithLinks />,
      raw: TwoColumnsWithLinksRaw,
    },
    {
      id: "08",
      name: "Full width with links",
      component: <FullWidthWithLinks />,
      raw: FullWidthWithLinksRaw,
    },
    {
      id: "09",
      name: "Full-width with constrained content",
      component: <FullWidthConstrained />,
      raw: FullWidthConstrainedRaw,
    },
    { id: "10", name: "Narrow", component: <Narrow />, raw: NarrowRaw },
    {
      id: "11",
      name: "Narrow with sticky headings",
      component: <NarrowStickyHeadings />,
      raw: NarrowStickyHeadingsRaw,
    },
    {
      id: "12",
      name: "Narrow with actions",
      component: <NarrowWithActions />,
      raw: NarrowWithActionsRaw,
    },
    {
      id: "13",
      name: "Narrow with truncated content",
      component: <NarrowTruncated />,
      raw: NarrowTruncatedRaw,
    },
    {
      id: "14",
      name: "Narrow with small avatars",
      component: <NarrowSmallAvatars />,
      raw: NarrowSmallAvatarsRaw,
    },
    {
      id: "15",
      name: "Narrow with badges",
      component: <NarrowWithBadges />,
      raw: NarrowWithBadgesRaw,
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

export default StackedListsDemoPage;
