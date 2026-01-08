import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Badge colors
import BadgeColors from "@/features/tailwind-v4/components/ui-kit/badge/badge-colors";
import BadgeColorsRaw from "@/features/tailwind-v4/components/ui-kit/badge/badge-colors.jsx?raw";

// 02. Using as buttons
import BadgeButtons from "@/features/tailwind-v4/components/ui-kit/badge/badge-button";
import BadgeButtonsRaw from "@/features/tailwind-v4/components/ui-kit/badge/badge-button.jsx?raw";

// 03. Using as links
import BadgeLinks from "@/features/tailwind-v4/components/ui-kit/badge/badge-link";
import BadgeLinksRaw from "@/features/tailwind-v4/components/ui-kit/badge/badge-link.jsx?raw";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Badge Colors",
      component: <BadgeColors />,
      raw: BadgeColorsRaw,
    },
    {
      id: "02",
      name: "Using as Buttons",
      component: <BadgeButtons />,
      raw: BadgeButtonsRaw,
    },
    {
      id: "03",
      name: "Using as Links",
      component: <BadgeLinks />,
      raw: BadgeLinksRaw,
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
