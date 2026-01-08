import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Simple with heading
import SimpleWithHeading from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/simple_with_heading";
import SimpleWithHeadingRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/simple_with_heading.jsx?raw";

// 02. Simple with call-to-action
import SimpleWithCallToAction from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/simple_with_call_to_action";
import SimpleWithCallToActionRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/simple_with_call_to_action.jsx?raw";

// 03. Simple left-aligned
import SimpleLeftAligned from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/simple_left_aligned";
import SimpleLeftAlignedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/simple_left_aligned.jsx?raw";

// 04. Split with logos on right
import SplitWithLogosOnRight from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/split_with_logos_on_right";
import SplitWithLogosOnRightRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/split_with_logos_on_right.jsx?raw";

// 05. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/simple.jsx?raw";

// 06. Grid
import Grid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/grid";
import GridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/logo-clouds/grid.jsx?raw";

const LogoCloudsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Simple with heading */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Simple with heading
        </h2>
        <PreviewWrapper name="Simple with heading" code={SimpleWithHeadingRaw}>
          <SimpleWithHeading />
        </PreviewWrapper>
      </section>

      {/* 02. Simple with call-to-action */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Simple with call-to-action
        </h2>
        <PreviewWrapper
          name="Simple with call-to-action"
          code={SimpleWithCallToActionRaw}
        >
          <SimpleWithCallToAction />
        </PreviewWrapper>
      </section>

      {/* 03. Simple left-aligned */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Simple left-aligned
        </h2>
        <PreviewWrapper name="Simple left-aligned" code={SimpleLeftAlignedRaw}>
          <SimpleLeftAligned />
        </PreviewWrapper>
      </section>

      {/* 04. Split with logos on right */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Split with logos on right
        </h2>
        <PreviewWrapper
          name="Split with logos on right"
          code={SplitWithLogosOnRightRaw}
        >
          <SplitWithLogosOnRight />
        </PreviewWrapper>
      </section>

      {/* 05. Simple */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">05. Simple</h2>
        <PreviewWrapper name="Simple logo cloud" code={SimpleRaw}>
          <Simple />
        </PreviewWrapper>
      </section>

      {/* 06. Grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">06. Grid</h2>
        <PreviewWrapper name="Logo grid" code={GridRaw}>
          <Grid />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default LogoCloudsDemoPage;
