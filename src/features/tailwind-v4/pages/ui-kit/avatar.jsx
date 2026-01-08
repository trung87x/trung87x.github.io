import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/avatar/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/avatar/basic.jsx?raw";

// 02. With initials
import WithInitials from "@/features/tailwind-v4/components/ui-kit/avatar/with-initials";
import WithInitialsRaw from "@/features/tailwind-v4/components/ui-kit/avatar/with-initials.jsx?raw";

// 03. With initials as fallback
import InitialsFallback from "@/features/tailwind-v4/components/ui-kit/avatar/initials-fallback";
import InitialsFallbackRaw from "@/features/tailwind-v4/components/ui-kit/avatar/initials-fallback.jsx?raw";

// 04. Square avatars
import SquareAvatars from "@/features/tailwind-v4/components/ui-kit/avatar/square";
import SquareAvatarsRaw from "@/features/tailwind-v4/components/ui-kit/avatar/square.jsx?raw";

// 05. Avatar groups
import AvatarGroups from "@/features/tailwind-v4/components/ui-kit/avatar/avatar-groups";
import AvatarGroupsRaw from "@/features/tailwind-v4/components/ui-kit/avatar/avatar-groups.jsx?raw";

// 06. Using as buttons
import AvatarButtons from "@/features/tailwind-v4/components/ui-kit/avatar/avatar-button";
import AvatarButtonsRaw from "@/features/tailwind-v4/components/ui-kit/avatar/avatar-button.jsx?raw";

// 07. Using as links
import AvatarLinks from "@/features/tailwind-v4/components/ui-kit/avatar/avatar-link";
import AvatarLinksRaw from "@/features/tailwind-v4/components/ui-kit/avatar/avatar-link.jsx?raw";

const mockUser = {
  name: "Erica",
  avatarUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  initials: "E",
};

const mockUsers = [
  {
    id: 1,
    name: "User 1",
    avatarUrl:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=32&h=32&facepad=2&fit=facearea&auto=format&q=80",
    initials: "U1",
  },
  {
    id: 2,
    name: "User 2",
    avatarUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=32&h=32&facepad=2&fit=facearea&auto=format&q=80",
    initials: "U2",
  },
  {
    id: 3,
    name: "User 3",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&facepad=2&fit=facearea&auto=format&q=80",
    initials: "U3",
  },
  {
    id: 4,
    name: "User 4",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&facepad=2&fit=facearea&auto=format&q=80",
    initials: "U4",
  },
];

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic",
      component: <Basic user={mockUser} />,
      raw: BasicRaw,
    },
    {
      id: "02",
      name: "With initials",
      component: <WithInitials />,
      raw: WithInitialsRaw,
    },
    {
      id: "03",
      name: "With initials as fallback",
      component: <InitialsFallback user={mockUser} />,
      raw: InitialsFallbackRaw,
    },
    {
      id: "04",
      name: "Square avatars",
      component: <SquareAvatars user={mockUser} />,
      raw: SquareAvatarsRaw,
    },
    {
      id: "05",
      name: "Avatar groups",
      component: <AvatarGroups users={mockUsers} />,
      raw: AvatarGroupsRaw,
    },
    {
      id: "06",
      name: "Using as buttons",
      component: <AvatarButtons user={mockUser} />,
      raw: AvatarButtonsRaw,
    },
    {
      id: "07",
      name: "Using as links",
      component: <AvatarLinks user={mockUser} />,
      raw: AvatarLinksRaw,
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-10 last:border-0"
        >
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

export default Page;
