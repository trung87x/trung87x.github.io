import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Side-by-side with details
import SideBySideWithDetails from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/side_by_side_with_details";
import SideBySideWithDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/side_by_side_with_details.jsx?raw";

// 02. Simple side-by-side
import SimpleSideBySide from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/simple_side_by_side";
import SimpleSideBySideRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/simple_side_by_side.jsx?raw";

// 03. Simple side-by-side on brand
import SimpleSideBySideOnBrand from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/simple_side_by_side_on_brand";
import SimpleSideBySideOnBrandRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/simple_side_by_side_on_brand.jsx?raw";

// 04. Simple stacked
import SimpleStacked from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/simple_stacked";
import SimpleStackedRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/simple_stacked.jsx?raw";

// 05. Centered card
import CenteredCard from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/centered_card";
import CenteredCardRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/centered_card.jsx?raw";

// 06. Side-by-side on card
import SideBySideOnCard from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/side_by_side_on_card";
import SideBySideOnCardRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/newsletter-sections/side_by_side_on_card.jsx?raw";

const NewsletterSectionsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Side-by-side with details */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Side-by-side with details
        </h2>
        <PreviewWrapper
          name="Side-by-side with details"
          code={SideBySideWithDetailsRaw}
        >
          <SideBySideWithDetails />
        </PreviewWrapper>
      </section>

      {/* 02. Simple side-by-side */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Simple side-by-side
        </h2>
        <PreviewWrapper name="Simple side-by-side" code={SimpleSideBySideRaw}>
          <SimpleSideBySide />
        </PreviewWrapper>
      </section>

      {/* 03. Simple side-by-side on brand */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Simple side-by-side on brand
        </h2>
        <PreviewWrapper
          name="Simple side-by-side on brand"
          code={SimpleSideBySideOnBrandRaw}
        >
          <SimpleSideBySideOnBrand />
        </PreviewWrapper>
      </section>

      {/* 04. Simple stacked */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Simple stacked
        </h2>
        <PreviewWrapper name="Simple stacked" code={SimpleStackedRaw}>
          <SimpleStacked />
        </PreviewWrapper>
      </section>

      {/* 05. Centered card */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Centered card
        </h2>
        <PreviewWrapper name="Centered card" code={CenteredCardRaw}>
          <CenteredCard />
        </PreviewWrapper>
      </section>

      {/* 06. Side-by-side on card */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. Side-by-side on card
        </h2>
        <PreviewWrapper name="Side-by-side on card" code={SideBySideOnCardRaw}>
          <SideBySideOnCard />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default NewsletterSectionsDemoPage;
