import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With featured categories
import WithFeaturedCategories from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_featured_categories";
import WithFeaturedCategoriesRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_featured_categories.jsx?raw";

// 02. With image grid
import WithImageGrid from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_image_grid";
import WithImageGridRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_image_grid.jsx?raw";

// 03. With simple menu and promo
import WithSimpleMenuAndPromo from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_simple_menu_and_promo";
import WithSimpleMenuAndPromoRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_simple_menu_and_promo.jsx?raw";

// 04. With centered logo and featured categories
import WithCenteredLogoAndFeaturedCategories from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_centered_logo_and_featured_categories";
import WithCenteredLogoAndFeaturedCategoriesRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_centered_logo_and_featured_categories.jsx?raw";

// 05. With double column and persistent mobile nav
import WithDoubleColumnAndPersistentMobileNav from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_double_column_and_persistent_mobile_nav";
import WithDoubleColumnAndPersistentMobileNavRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/store-navigation/with_double_column_and_persistent_mobile_nav.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const StoreNavigationDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With featured categories",
      component: <WithFeaturedCategories />,
      raw: WithFeaturedCategoriesRaw,
    },
    {
      id: "02",
      name: "With image grid",
      component: <WithImageGrid />,
      raw: WithImageGridRaw,
    },
    {
      id: "03",
      name: "With simple menu and promo",
      component: <WithSimpleMenuAndPromo />,
      raw: WithSimpleMenuAndPromoRaw,
    },
    {
      id: "04",
      name: "With centered logo and featured categories",
      component: <WithCenteredLogoAndFeaturedCategories />,
      raw: WithCenteredLogoAndFeaturedCategoriesRaw,
    },
    {
      id: "05",
      name: "With double column and persistent mobile nav",
      component: <WithDoubleColumnAndPersistentMobileNav />,
      raw: WithDoubleColumnAndPersistentMobileNavRaw,
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

export default StoreNavigationDemoPage;
