import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Two tiers with emphasized right tier
import TwoTiersWithEmphasizedTier from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/two_tiers_with_emphasized_tier";
import TwoTiersWithEmphasizedTierRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/two_tiers_with_emphasized_tier.jsx?raw";

// 02. Two tiers with emphasized left tier
import TwoTiersWithEmphasizedLeftTier from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/two_tiers";
import TwoTiersWithEmphasizedLeftTierRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/two_tiers.jsx?raw";

// 03. Three tiers with logos and feature comparison
import ThreeTiersWithLogosAndFeatureComparison from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_logos_and_feature_comparison";
import ThreeTiersWithLogosAndFeatureComparisonRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_logos_and_feature_comparison.jsx?raw";

// 04. Two tiers with extra tier
import TwoTiersWithExtraTier from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/two_tiers_with_extra_tier";
import TwoTiersWithExtraTierRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/two_tiers_with_extra_tier.jsx?raw";

// 05. Single price with details
import SinglePriceWithDetails from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/single_price_with_details";
import SinglePriceWithDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/single_price_with_details.jsx?raw";

// 06. Three tiers
import ThreeTiers from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers";
import ThreeTiersRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers.jsx?raw";

// 07. Three tiers with dividers
import ThreeTiersWithDividers from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_dividers";
import ThreeTiersWithDividersRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_dividers.jsx?raw";

// 08. Three tiers with emphasized tier
import ThreeTiersWithEmphasizedTier from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_emphasized_tier";
import ThreeTiersWithEmphasizedTierRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_emphasized_tier.jsx?raw";

// 09. Three tiers with toggle
import ThreeTiersWithToggle from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_toggle";
import ThreeTiersWithToggleRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_toggle.jsx?raw";

// 10. Four tiers with toggle
import FourTiersWithToggle from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/four_tiers_with_toggle";
import FourTiersWithToggleRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/four_tiers_with_toggle.jsx?raw";

// 11. With comparison table
import WithComparisonTable from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/with_comparison_table";
import WithComparisonTableRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/with_comparison_table.jsx?raw";

// 12. Three tiers with feature comparison
import ThreeTiersWithFeatureComparison from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_feature_comparison";
import ThreeTiersWithFeatureComparisonRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/pricing-sections/three_tiers_with_feature_comparison.jsx?raw";

const PricingDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Two tiers with emphasized right tier */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Two tiers with emphasized right tier
        </h2>
        <PreviewWrapper
          name="Two tiers with emphasized right tier"
          code={TwoTiersWithEmphasizedTierRaw}
        >
          <TwoTiersWithEmphasizedTier />
        </PreviewWrapper>
      </section>

      {/* 02. Two tiers with emphasized left tier */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Two tiers with emphasized left tier
        </h2>
        <PreviewWrapper
          name="Two tiers with emphasized left tier"
          code={TwoTiersWithEmphasizedLeftTierRaw}
        >
          <TwoTiersWithEmphasizedLeftTier />
        </PreviewWrapper>
      </section>

      {/* 03. Three tiers with logos and feature comparison */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Three tiers with logos and feature comparison
        </h2>
        <PreviewWrapper
          name="Three tiers with logos and feature comparison"
          code={ThreeTiersWithLogosAndFeatureComparisonRaw}
        >
          <ThreeTiersWithLogosAndFeatureComparison />
        </PreviewWrapper>
      </section>

      {/* 04. Two tiers with extra tier */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Two tiers with extra tier
        </h2>
        <PreviewWrapper
          name="Two tiers with extra tier"
          code={TwoTiersWithExtraTierRaw}
        >
          <TwoTiersWithExtraTier />
        </PreviewWrapper>
      </section>

      {/* 05. Single price with details */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Single price with details
        </h2>
        <PreviewWrapper
          name="Single price with details"
          code={SinglePriceWithDetailsRaw}
        >
          <SinglePriceWithDetails />
        </PreviewWrapper>
      </section>

      {/* 06. Three tiers */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. Three tiers
        </h2>
        <PreviewWrapper name="Three tiers" code={ThreeTiersRaw}>
          <ThreeTiers />
        </PreviewWrapper>
      </section>

      {/* 07. Three tiers with dividers */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Three tiers with dividers
        </h2>
        <PreviewWrapper
          name="Three tiers with dividers"
          code={ThreeTiersWithDividersRaw}
        >
          <ThreeTiersWithDividers />
        </PreviewWrapper>
      </section>

      {/* 08. Three tiers with emphasized tier */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          08. Three tiers with emphasized tier
        </h2>
        <PreviewWrapper
          name="Three tiers with emphasized tier"
          code={ThreeTiersWithEmphasizedTierRaw}
        >
          <ThreeTiersWithEmphasizedTier />
        </PreviewWrapper>
      </section>

      {/* 09. Three tiers with toggle */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          09. Three tiers with toggle
        </h2>
        <PreviewWrapper
          name="Three tiers with toggle"
          code={ThreeTiersWithToggleRaw}
        >
          <ThreeTiersWithToggle />
        </PreviewWrapper>
      </section>

      {/* 10. Four tiers with toggle */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          10. Four tiers with toggle
        </h2>
        <PreviewWrapper
          name="Four tiers with toggle"
          code={FourTiersWithToggleRaw}
        >
          <FourTiersWithToggle />
        </PreviewWrapper>
      </section>

      {/* 11. With comparison table */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          11. With comparison table
        </h2>
        <PreviewWrapper
          name="With comparison table"
          code={WithComparisonTableRaw}
        >
          <WithComparisonTable />
        </PreviewWrapper>
      </section>

      {/* 12. Three tiers with feature comparison */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          12. Three tiers with feature comparison
        </h2>
        <PreviewWrapper
          name="Three tiers with feature comparison"
          code={ThreeTiersWithFeatureComparisonRaw}
        >
          <ThreeTiersWithFeatureComparison />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default PricingDemoPage;
