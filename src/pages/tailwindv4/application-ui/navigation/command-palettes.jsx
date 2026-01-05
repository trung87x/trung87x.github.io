import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. Simple
import Simple from "@/component-plus/application-ui/navigation/command-palettes/simple";
import SimpleRaw from "@/component-plus/application-ui/navigation/command-palettes/simple.jsx?raw";

// 02. Simple with padding
import SimpleWithPadding from "@/component-plus/application-ui/navigation/command-palettes/simple_with_padding";
import SimpleWithPaddingRaw from "@/component-plus/application-ui/navigation/command-palettes/simple_with_padding.jsx?raw";

// 03. With preview
import WithPreview from "@/component-plus/application-ui/navigation/command-palettes/with_preview";
import WithPreviewRaw from "@/component-plus/application-ui/navigation/command-palettes/with_preview.jsx?raw";

// 04. With images and descriptions
import WithImagesDescriptions from "@/component-plus/application-ui/navigation/command-palettes/with_images_and_descriptions";
import WithImagesDescriptionsRaw from "@/component-plus/application-ui/navigation/command-palettes/with_images_and_descriptions.jsx?raw";

// 05. With icons
import WithIcons from "@/component-plus/application-ui/navigation/command-palettes/with_icons";
import WithIconsRaw from "@/component-plus/application-ui/navigation/command-palettes/with_icons.jsx?raw";

// 06. Semi-transparent with icons
import SemiTransparentWithIcons from "@/component-plus/application-ui/navigation/command-palettes/semi_transparent_with_icons";
import SemiTransparentWithIconsRaw from "@/component-plus/application-ui/navigation/command-palettes/semi_transparent_with_icons.jsx?raw";

// 07. With groups
import WithGroups from "@/component-plus/application-ui/navigation/command-palettes/with_groups";
import WithGroupsRaw from "@/component-plus/application-ui/navigation/command-palettes/with_groups.jsx?raw";

// 08. With footer
import WithFooter from "@/component-plus/application-ui/navigation/command-palettes/with_footer";
import WithFooterRaw from "@/component-plus/application-ui/navigation/command-palettes/with_footer.jsx?raw";

const FlyoutMenusDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "Simple with padding",
      component: <SimpleWithPadding />,
      raw: SimpleWithPaddingRaw,
    },
    {
      id: "03",
      name: "With preview",
      component: <WithPreview />,
      raw: WithPreviewRaw,
    },
    {
      id: "04",
      name: "With images and descriptions",
      component: <WithImagesDescriptions />,
      raw: WithImagesDescriptionsRaw,
    },
    {
      id: "05",
      name: "With icons",
      component: <WithIcons />,
      raw: WithIconsRaw,
    },
    {
      id: "06",
      name: "Semi-transparent with icons",
      component: <SemiTransparentWithIcons />,
      raw: SemiTransparentWithIconsRaw,
    },
    {
      id: "07",
      name: "With groups",
      component: <WithGroups />,
      raw: WithGroupsRaw,
    },
    {
      id: "08",
      name: "With footer",
      component: <WithFooter />,
      raw: WithFooterRaw,
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

export default FlyoutMenusDemoPage;
