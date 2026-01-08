import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Dark panel with app screenshot
import DarkPanelWithAppScreenshot from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/dark_panel_with_app_screenshot";
import DarkPanelWithAppScreenshotRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/dark_panel_with_app_screenshot.jsx?raw";

// 02. Simple stacked
import SimpleStacked from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_stacked";
import SimpleStackedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_stacked.jsx?raw";

// 03. Centered on dark panel
import CenteredOnDarkPanel from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/centered_on_dark_panel";
import CenteredOnDarkPanelRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/centered_on_dark_panel.jsx?raw";

// 04. Simple centered
import SimpleCentered from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_centered";
import SimpleCenteredRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_centered.jsx?raw";

// 05. Simple centered with gradient
import SimpleCenteredWithGradient from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_centered_on_dark";
import SimpleCenteredWithGradientRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_centered_on_dark.jsx?raw";

// 06. Simple centered on brand
import SimpleCenteredOnBrand from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_centered_on_brand";
import SimpleCenteredOnBrandRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_centered_on_brand.jsx?raw";

// 07. Simple justified
import SimpleJustified from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_justified";
import SimpleJustifiedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_justified.jsx?raw";

// 08. Simple justified on subtle brand
import SimpleJustifiedOnSubtleBrand from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_justified_on_light_brand";
import SimpleJustifiedOnSubtleBrandRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/simple_justified_on_light_brand.jsx?raw";

// 09. Split with image
import SplitWithImage from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/split_with_image";
import SplitWithImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/split_with_image.jsx?raw";

// 10. Two columns with photo
import TwoColumnsWithPhoto from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/two_columns_with_photo_on_dark";
import TwoColumnsWithPhotoRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/two_columns_with_photo_on_dark.jsx?raw";

// 11. With image tiles
import WithImageTiles from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/with_image_tiles";
import WithImageTilesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/cta-sections/with_image_tiles.jsx?raw";

const CtaDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Dark panel with app screenshot */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Dark panel with app screenshot
        </h2>
        <PreviewWrapper
          name="Dark panel with app screenshot"
          code={DarkPanelWithAppScreenshotRaw}
        >
          <DarkPanelWithAppScreenshot />
        </PreviewWrapper>
      </section>

      {/* 02. Simple stacked */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Simple stacked
        </h2>
        <PreviewWrapper name="Simple stacked" code={SimpleStackedRaw}>
          <SimpleStacked />
        </PreviewWrapper>
      </section>

      {/* 03. Centered on dark panel */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Centered on dark panel
        </h2>
        <PreviewWrapper
          name="Centered on dark panel"
          code={CenteredOnDarkPanelRaw}
        >
          <CenteredOnDarkPanel />
        </PreviewWrapper>
      </section>

      {/* 04. Simple centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Simple centered
        </h2>
        <PreviewWrapper name="Simple centered" code={SimpleCenteredRaw}>
          <SimpleCentered />
        </PreviewWrapper>
      </section>

      {/* 05. Simple centered with gradient */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Simple centered with gradient
        </h2>
        <PreviewWrapper
          name="Simple centered with gradient"
          code={SimpleCenteredWithGradientRaw}
        >
          <SimpleCenteredWithGradient />
        </PreviewWrapper>
      </section>

      {/* 06. Simple centered on brand */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. Simple centered on brand
        </h2>
        <PreviewWrapper
          name="Simple centered on brand"
          code={SimpleCenteredOnBrandRaw}
        >
          <SimpleCenteredOnBrand />
        </PreviewWrapper>
      </section>

      {/* 07. Simple justified */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Simple justified
        </h2>
        <PreviewWrapper name="Simple justified" code={SimpleJustifiedRaw}>
          <SimpleJustified />
        </PreviewWrapper>
      </section>

      {/* 08. Simple justified on subtle brand */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. Simple justified on subtle brand
        </h2>
        <PreviewWrapper
          name="Simple justified on subtle brand"
          code={SimpleJustifiedOnSubtleBrandRaw}
        >
          <SimpleJustifiedOnSubtleBrand />
        </PreviewWrapper>
      </section>

      {/* 09. Split with image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          09. Split with image
        </h2>
        <PreviewWrapper name="Split with image" code={SplitWithImageRaw}>
          <SplitWithImage />
        </PreviewWrapper>
      </section>

      {/* 10. Two columns with photo */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          10. Two columns with photo
        </h2>
        <PreviewWrapper
          name="Two columns with photo"
          code={TwoColumnsWithPhotoRaw}
        >
          <TwoColumnsWithPhoto />
        </PreviewWrapper>
      </section>

      {/* 11. With image tiles */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          11. With image tiles
        </h2>
        <PreviewWrapper name="With image tiles" code={WithImageTilesRaw}>
          <WithImageTiles />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default CtaDemoPage;
