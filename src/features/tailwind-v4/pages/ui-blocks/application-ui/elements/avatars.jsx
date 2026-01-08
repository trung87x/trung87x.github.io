import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Avatar group stacked bottom to top
import AvatarGroupStackedBottomToTop from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/avatar_group_stacked_bottom_to_top";
import AvatarGroupStackedBottomToTopRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/avatar_group_stacked_bottom_to_top.jsx?raw";

// 02. Circular avatars
import CircularAvatars from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars";
import CircularAvatarsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars.jsx?raw";

// 03. Rounded avatars
import RoundedAvatars from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/rounded_avatars";
import RoundedAvatarsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/rounded_avatars.jsx?raw";

// 04. Circular avatars with top notification
import CircularAvatarsWithTopNotification from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars_with_top_notification";
import CircularAvatarsWithTopNotificationRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars_with_top_notification.jsx?raw";

// 05. Rounded avatars with top notification
import RoundedAvatarsWithTopNotification from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/rounded_avatars_with_top_notification";
import RoundedAvatarsWithTopNotificationRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/rounded_avatars_with_top_notification.jsx?raw";

// 06. Circular avatars with bottom notification
import CircularAvatarsWithBottomNotification from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars_with_bottom_notification";
import CircularAvatarsWithBottomNotificationRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars_with_bottom_notification.jsx?raw";

// 07. Rounded avatars with bottom notification
import RoundedAvatarsWithBottomNotification from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/rounded_avatars_with_bottom_notification";
import RoundedAvatarsWithBottomNotificationRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/rounded_avatars_with_bottom_notification.jsx?raw";

// 08. Circular avatars with placeholder icon
import CircularAvatarsWithPlaceholderIcon from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars_with_placeholder_icon";
import CircularAvatarsWithPlaceholderIconRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars_with_placeholder_icon.jsx?raw";

// 09. Circular avatars with placeholder initials
import CircularAvatarsWithPlaceholderInitials from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars_with_placeholder_initials";
import CircularAvatarsWithPlaceholderInitialsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/circular_avatars_with_placeholder_initials.jsx?raw";

// 10. Avatar group stacked top to bottom
import AvatarGroupStackedTopToBottom from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/avatar_group_stacked_top_to_bottom";
import AvatarGroupStackedTopToBottomRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/avatar_group_stacked_top_to_bottom.jsx?raw";

// 11. With text
import WithText from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/with_text";
import WithTextRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/elements/avatars/with_text.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const AvatarsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Avatar group stacked bottom to top",
      component: <AvatarGroupStackedBottomToTop />,
      raw: AvatarGroupStackedBottomToTopRaw,
    },
    {
      id: "02",
      name: "Circular avatars",
      component: <CircularAvatars />,
      raw: CircularAvatarsRaw,
    },
    {
      id: "03",
      name: "Rounded avatars",
      component: <RoundedAvatars />,
      raw: RoundedAvatarsRaw,
    },
    {
      id: "04",
      name: "Circular avatars with top notification",
      component: <CircularAvatarsWithTopNotification />,
      raw: CircularAvatarsWithTopNotificationRaw,
    },
    {
      id: "05",
      name: "Rounded avatars with top notification",
      component: <RoundedAvatarsWithTopNotification />,
      raw: RoundedAvatarsWithTopNotificationRaw,
    },
    {
      id: "06",
      name: "Circular avatars with bottom notification",
      component: <CircularAvatarsWithBottomNotification />,
      raw: CircularAvatarsWithBottomNotificationRaw,
    },
    {
      id: "07",
      name: "Rounded avatars with bottom notification",
      component: <RoundedAvatarsWithBottomNotification />,
      raw: RoundedAvatarsWithBottomNotificationRaw,
    },
    {
      id: "08",
      name: "Circular avatars with placeholder icon",
      component: <CircularAvatarsWithPlaceholderIcon />,
      raw: CircularAvatarsWithPlaceholderIconRaw,
    },
    {
      id: "09",
      name: "Circular avatars with placeholder initials",
      component: <CircularAvatarsWithPlaceholderInitials />,
      raw: CircularAvatarsWithPlaceholderInitialsRaw,
    },
    {
      id: "10",
      name: "Avatar group stacked top to bottom",
      component: <AvatarGroupStackedTopToBottom />,
      raw: AvatarGroupStackedTopToBottomRaw,
    },
    { id: "11", name: "With text", component: <WithText />, raw: WithTextRaw },
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

export default AvatarsDemoPage;
