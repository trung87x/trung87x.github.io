import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Three column bento grid
import ThreeColumnBentoGrid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/bento-grids/three_column_bento_grid";
import ThreeColumnBentoGridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/bento-grids/three_column_bento_grid.jsx?raw";

// 02. Two row bento grid
import TwoRowBentoGridOnDark from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/bento-grids/two_row_bento_grid_on_dark";
import TwoRowBentoGridOnDarkRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/bento-grids/two_row_bento_grid_on_dark.jsx?raw";

// 03. Two row bento grid with three column second row
import TwoRowBentoGrid from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/bento-grids/two_row_bento_grid";
import TwoRowBentoGridRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/bento-grids/two_row_bento_grid.jsx?raw";

const BentoGridsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Three column bento grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Three column bento grid
        </h2>
        <PreviewWrapper
          name="Three column bento grid"
          code={ThreeColumnBentoGridRaw}
        >
          <ThreeColumnBentoGrid />
        </PreviewWrapper>
      </section>

      {/* 02. Two row bento grid */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Two row bento grid
        </h2>
        <PreviewWrapper
          name="Two row bento grid"
          code={TwoRowBentoGridOnDarkRaw}
        >
          <TwoRowBentoGridOnDark />
        </PreviewWrapper>
      </section>

      {/* 03. Two row bento grid with three column second row */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Two row bento grid with three column second row
        </h2>
        <PreviewWrapper
          name="Two row bento grid with three column second row"
          code={TwoRowBentoGridRaw}
        >
          <TwoRowBentoGrid />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default BentoGridsDemoPage;
