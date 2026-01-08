import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Three-column
import ThreeColumn from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/three_column";
import ThreeColumnRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/three_column.jsx?raw";

// 02. Three-column with images
import ThreeColumnWithImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/three_column_with_images";
import ThreeColumnWithImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/three_column_with_images.jsx?raw";

// 03. Three-column with background images
import ThreeColumnWithBackgroundImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/three_column_with_background_images";
import ThreeColumnWithBackgroundImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/three_column_with_background_images.jsx?raw";

// 04. Single-column
import SingleColumn from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/single_column";
import SingleColumnRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/single_column.jsx?raw";

// 05. Single-column with images
import SingleColumnWithImages from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/single_column_with_images";
import SingleColumnWithImagesRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/single_column_with_images.jsx?raw";

// 06. With featured post
import WithFeaturedPost from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/with_featured_post";
import WithFeaturedPostRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/with_featured_post.jsx?raw";

// 07. With photo and list
import WithPhotoAndList from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/with_photo_and_list";
import WithPhotoAndListRaw from "@/features/tailwind-v4/components/ui-blocks/marketing/page-sections/blog-sections/with_photo_and_list.jsx?raw";

const BlogSectionsDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Three-column */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Three-column
        </h2>
        <PreviewWrapper name="Three-column" code={ThreeColumnRaw}>
          <ThreeColumn />
        </PreviewWrapper>
      </section>

      {/* 02. Three-column with images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Three-column with images
        </h2>
        <PreviewWrapper
          name="Three-column with images"
          code={ThreeColumnWithImagesRaw}
        >
          <ThreeColumnWithImages />
        </PreviewWrapper>
      </section>

      {/* 03. Three-column with background images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Three-column with background images
        </h2>
        <PreviewWrapper
          name="Three-column with background images"
          code={ThreeColumnWithBackgroundImagesRaw}
        >
          <ThreeColumnWithBackgroundImages />
        </PreviewWrapper>
      </section>

      {/* 04. Single-column */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          04. Single-column
        </h2>
        <PreviewWrapper name="Single-column" code={SingleColumnRaw}>
          <SingleColumn />
        </PreviewWrapper>
      </section>

      {/* 05. Single-column with images */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Single-column with images
        </h2>
        <PreviewWrapper
          name="Single-column with images"
          code={SingleColumnWithImagesRaw}
        >
          <SingleColumnWithImages />
        </PreviewWrapper>
      </section>

      {/* 06. With featured post */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          06. With featured post
        </h2>
        <PreviewWrapper name="With featured post" code={WithFeaturedPostRaw}>
          <WithFeaturedPost />
        </PreviewWrapper>
      </section>

      {/* 07. With photo and list */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          07. With photo and list
        </h2>
        <PreviewWrapper name="With photo and list" code={WithPhotoAndListRaw}>
          <WithPhotoAndList />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default BlogSectionsDemoPage;
