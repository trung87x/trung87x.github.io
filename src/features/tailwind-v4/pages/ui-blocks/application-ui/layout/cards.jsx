import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Basic card
import BasicCard from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/basic_card";
import BasicCardRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/basic_card.jsx?raw";

// 02. Card, edge-to-edge on mobile
import CardEdgeToEdgeOnMobile from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card__edge_to_edge_on_mobile";
import CardEdgeToEdgeOnMobileRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card__edge_to_edge_on_mobile.jsx?raw";

// 03. Card with header
import CardWithHeader from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_header";
import CardWithHeaderRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_header.jsx?raw";

// 04. Card with footer
import CardWithFooter from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_footer";
import CardWithFooterRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_footer.jsx?raw";

// 05. Card with header and footer
import CardWithHeaderAndFooter from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_header_and_footer";
import CardWithHeaderAndFooterRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_header_and_footer.jsx?raw";

// 06. Card with gray footer
import CardWithGrayFooter from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_gray_footer";
import CardWithGrayFooterRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_gray_footer.jsx?raw";

// 07. Card with gray body
import CardWithGrayBody from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_gray_body";
import CardWithGrayBodyRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/card_with_gray_body.jsx?raw";

// 08. Well
import Well from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/well";
import WellRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/well.jsx?raw";

// 09. Well on gray
import WellOnGray from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/well_on_gray";
import WellOnGrayRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/well_on_gray.jsx?raw";

// 10. Well, edge-to-edge on mobile
import WellEdgeToEdgeOnMobile from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/well__edge_to_edge_on_mobile";
import WellEdgeToEdgeOnMobileRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/cards/well__edge_to_edge_on_mobile.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const CardsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic card",
      component: <BasicCard />,
      raw: BasicCardRaw,
    },
    {
      id: "02",
      name: "Card, edge-to-edge on mobile",
      component: <CardEdgeToEdgeOnMobile />,
      raw: CardEdgeToEdgeOnMobileRaw,
    },
    {
      id: "03",
      name: "Card with header",
      component: <CardWithHeader />,
      raw: CardWithHeaderRaw,
    },
    {
      id: "04",
      name: "Card with footer",
      component: <CardWithFooter />,
      raw: CardWithFooterRaw,
    },
    {
      id: "05",
      name: "Card with header and footer",
      component: <CardWithHeaderAndFooter />,
      raw: CardWithHeaderAndFooterRaw,
    },
    {
      id: "06",
      name: "Card with gray footer",
      component: <CardWithGrayFooter />,
      raw: CardWithGrayFooterRaw,
    },
    {
      id: "07",
      name: "Card with gray body",
      component: <CardWithGrayBody />,
      raw: CardWithGrayBodyRaw,
    },
    {
      id: "08",
      name: "Well",
      component: <Well />,
      raw: WellRaw,
    },
    {
      id: "09",
      name: "Well on gray",
      component: <WellOnGray />,
      raw: WellOnGrayRaw,
    },
    {
      id: "10",
      name: "Well, edge-to-edge on mobile",
      component: <WellEdgeToEdgeOnMobile />,
      raw: WellEdgeToEdgeOnMobileRaw,
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

export default CardsDemoPage;
