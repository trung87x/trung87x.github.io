import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. With four tiers
import WithFourTiers from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/pricing-pages/with_four_tiers";
import WithFourTiersRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/pricing-pages/with_four_tiers.jsx?raw";

// 02. With comparison table
import WithComparisonTable from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/pricing-pages/with_comparison_table";
import WithComparisonTableRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/pricing-pages/with_comparison_table.jsx?raw";

// 03. With three tiers and testimonials
import WithThreeTiersAndTestimonials from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/pricing-pages/with_three_tiers_and_testimonials";
import WithThreeTiersAndTestimonialsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-examples/pricing-pages/with_three_tiers_and_testimonials.jsx?raw";

const PricingPagesDemoPage = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* 01. With four tiers */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. With four tiers
        </h2>
        <PreviewWrapper
          name="Pricing page with four tiers"
          code={WithFourTiersRaw}
        >
          <WithFourTiers />
        </PreviewWrapper>
      </section>

      {/* 02. With comparison table */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. With comparison table
        </h2>
        <PreviewWrapper
          name="Pricing page with comparison table"
          code={WithComparisonTableRaw}
        >
          <WithComparisonTable />
        </PreviewWrapper>
      </section>

      {/* 03. With three tiers and testimonials */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. With three tiers and testimonials
        </h2>
        <PreviewWrapper
          name="Pricing page with testimonials"
          code={WithThreeTiersAndTestimonialsRaw}
        >
          <WithThreeTiersAndTestimonials />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default PricingPagesDemoPage;
