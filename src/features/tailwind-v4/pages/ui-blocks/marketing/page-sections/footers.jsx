import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. 4-column with company mission on dark
import FourColumnWithCompanyMissionOnDark from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_with_company_mission_on_dark";
import FourColumnWithCompanyMissionOnDarkRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_with_company_mission_on_dark.jsx?raw";

// 02. 4-column with call-to-action
import FourColumnWithCallToAction from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_with_call_to_action";
import FourColumnWithCallToActionRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_with_call_to_action.jsx?raw";

// 03. 4-column simple
import FourColumnSimple from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_simple";
import FourColumnSimpleRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_simple.jsx?raw";

// 04. 4-column with newsletter
import FourColumnWithNewsletter from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_with_newsletter";
import FourColumnWithNewsletterRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_with_newsletter.jsx?raw";

// 05. 4-column with newsletter below
import FourColumnWithNewsletterBelow from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_with_newsletter_below";
import FourColumnWithNewsletterBelowRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/4_column_with_newsletter_below.jsx?raw";

// 06. Simple centered
import SimpleCentered from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/simple_centered";
import SimpleCenteredRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/simple_centered.jsx?raw";

// 07. Simple with social links
import SimpleWithSocialLinks from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/simple_with_social_links";
import SimpleWithSocialLinksRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/footers/simple_with_social_links.jsx?raw";

const FooterDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. 4-column with company mission on dark */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. 4-column with company mission on dark
        </h2>
        <PreviewWrapper
          name="4-column mission (Dark)"
          code={FourColumnWithCompanyMissionOnDarkRaw}
        >
          <FourColumnWithCompanyMissionOnDark />
        </PreviewWrapper>
      </section>

      {/* 02. 4-column with call-to-action */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. 4-column with call-to-action
        </h2>
        <PreviewWrapper
          name="4-column with CTA"
          code={FourColumnWithCallToActionRaw}
        >
          <FourColumnWithCallToAction />
        </PreviewWrapper>
      </section>

      {/* 03. 4-column simple */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. 4-column simple
        </h2>
        <PreviewWrapper name="4-column simple" code={FourColumnSimpleRaw}>
          <FourColumnSimple />
        </PreviewWrapper>
      </section>

      {/* 04. 4-column with newsletter */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. 4-column with newsletter
        </h2>
        <PreviewWrapper
          name="4-column with newsletter"
          code={FourColumnWithNewsletterRaw}
        >
          <FourColumnWithNewsletter />
        </PreviewWrapper>
      </section>

      {/* 05. 4-column with newsletter below */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. 4-column with newsletter below
        </h2>
        <PreviewWrapper
          name="4-column newsletter below"
          code={FourColumnWithNewsletterBelowRaw}
        >
          <FourColumnWithNewsletterBelow />
        </PreviewWrapper>
      </section>

      {/* 06. Simple centered */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. Simple centered
        </h2>
        <PreviewWrapper name="Simple centered footer" code={SimpleCenteredRaw}>
          <SimpleCentered />
        </PreviewWrapper>
      </section>

      {/* 07. Simple with social links */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. Simple with social links
        </h2>
        <PreviewWrapper
          name="Simple with social links"
          code={SimpleWithSocialLinksRaw}
        >
          <SimpleWithSocialLinks />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default FooterDemoPage;
