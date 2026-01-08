import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Simple
import Simple from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/simple";
import SimpleRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/simple.jsx?raw";

// 02. Split with image
import SplitWithImage from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/split_with_image";
import SplitWithImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/split_with_image.jsx?raw";

// 03. With popular pages
import WithPopularPages from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/with_popular_pages";
import WithPopularPagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/with_popular_pages.jsx?raw";

// 04. With background image
import WithBackgroundImage from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/with_background_image";
import WithBackgroundImageRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/with_background_image.jsx?raw";

// 05. With navbar and footer
import WithNavbarAndFooter from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/with_navbar_and_footer";
import WithNavbarAndFooterRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/feedback/404-pages/with_navbar_and_footer.jsx?raw";

const NotFoundPagesDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Simple */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">01. Simple</h2>
        <PreviewWrapper name="Simple 404 page" code={SimpleRaw}>
          <Simple />
        </PreviewWrapper>
      </section>

      {/* 02. Split with image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Split with image
        </h2>
        <PreviewWrapper name="Split with image 404" code={SplitWithImageRaw}>
          <SplitWithImage />
        </PreviewWrapper>
      </section>

      {/* 03. With popular pages */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. With popular pages
        </h2>
        <PreviewWrapper name="With popular pages" code={WithPopularPagesRaw}>
          <WithPopularPages />
        </PreviewWrapper>
      </section>

      {/* 04. With background image */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. With background image
        </h2>
        <PreviewWrapper
          name="With background image 404"
          code={WithBackgroundImageRaw}
        >
          <WithBackgroundImage />
        </PreviewWrapper>
      </section>

      {/* 05. With navbar and footer */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. With navbar and footer
        </h2>
        <PreviewWrapper
          name="With navbar and footer 404"
          code={WithNavbarAndFooterRaw}
        >
          <WithNavbarAndFooter />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default NotFoundPagesDemoPage;
