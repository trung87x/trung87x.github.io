import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple with dividers
import SimpleWithDividers from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/simple_with_dividers";
import SimpleWithDividersRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/simple_with_dividers.jsx?raw";

// 02. Card with dividers
import CardWithDividers from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/card_with_dividers";
import CardWithDividersRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/card_with_dividers.jsx?raw";

// 03. Card with dividers, full-width on mobile
import CardWithDividersFullWidthOnMobile from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/card_with_dividers__full_width_on_mobile";
import CardWithDividersFullWidthOnMobileRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/card_with_dividers__full_width_on_mobile.jsx?raw";

// 04. Separate cards
import SeparateCards from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/separate_cards";
import SeparateCardsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/separate_cards.jsx?raw";

// 05. Separate cards, full-width on mobile
import SeparateCardsFullWidthOnMobile from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/separate_cards__full_width_on_mobile";
import SeparateCardsFullWidthOnMobileRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/separate_cards__full_width_on_mobile.jsx?raw";

// 06. Flat card with dividers
import FlatCardWithDividers from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/flat_card_with_dividers";
import FlatCardWithDividersRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/flat_card_with_dividers.jsx?raw";

// 07. Simple with dividers, full-width on mobile
import SimpleWithDividersFullWidthOnMobile from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/simple_with_dividers__full_width_on_mobile";
import SimpleWithDividersFullWidthOnMobileRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/list-containers/simple_with_dividers__full_width_on_mobile.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ListContainersDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple with dividers",
      component: <SimpleWithDividers />,
      raw: SimpleWithDividersRaw,
    },
    {
      id: "02",
      name: "Card with dividers",
      component: <CardWithDividers />,
      raw: CardWithDividersRaw,
    },
    {
      id: "03",
      name: "Card with dividers, full-width on mobile",
      component: <CardWithDividersFullWidthOnMobile />,
      raw: CardWithDividersFullWidthOnMobileRaw,
    },
    {
      id: "04",
      name: "Separate cards",
      component: <SeparateCards />,
      raw: SeparateCardsRaw,
    },
    {
      id: "05",
      name: "Separate cards, full-width on mobile",
      component: <SeparateCardsFullWidthOnMobile />,
      raw: SeparateCardsFullWidthOnMobileRaw,
    },
    {
      id: "06",
      name: "Flat card with dividers",
      component: <FlatCardWithDividers />,
      raw: FlatCardWithDividersRaw,
    },
    {
      id: "07",
      name: "Simple with dividers, full-width on mobile",
      component: <SimpleWithDividersFullWidthOnMobile />,
      raw: SimpleWithDividersFullWidthOnMobileRaw,
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

export default ListContainersDemoPage;
