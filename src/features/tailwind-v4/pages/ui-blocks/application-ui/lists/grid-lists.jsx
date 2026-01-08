import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Contact cards with small portraits
import ContactCardsWithSmallPortraits from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/contact_cards_with_small_portraits";
import ContactCardsWithSmallPortraitsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/contact_cards_with_small_portraits.jsx?raw";

// 02. Contact cards
import ContactCards from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/contact_cards";
import ContactCardsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/contact_cards.jsx?raw";

// 03. Simple cards
import SimpleCards from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/simple_cards";
import SimpleCardsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/simple_cards.jsx?raw";

// 04. Horizontal link cards
import HorizontalLinkCards from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/horizontal_link_cards";
import HorizontalLinkCardsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/horizontal_link_cards.jsx?raw";

// 05. Actions with shared borders
import ActionsWithSharedBorders from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/actions_with_shared_borders";
import ActionsWithSharedBordersRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/actions_with_shared_borders.jsx?raw";

// 06. Images with details
import ImagesWithDetails from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/images_with_details";
import ImagesWithDetailsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/images_with_details.jsx?raw";

// 07. Logos cards with description list
import LogosCardsWithDescriptionList from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/logos_cards_with_description_list";
import LogosCardsWithDescriptionListRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/lists/grid-lists/logos_cards_with_description_list.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const GridListsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Contact cards with small portraits",
      component: <ContactCardsWithSmallPortraits />,
      raw: ContactCardsWithSmallPortraitsRaw,
    },
    {
      id: "02",
      name: "Contact cards",
      component: <ContactCards />,
      raw: ContactCardsRaw,
    },
    {
      id: "03",
      name: "Simple cards",
      component: <SimpleCards />,
      raw: SimpleCardsRaw,
    },
    {
      id: "04",
      name: "Horizontal link cards",
      component: <HorizontalLinkCards />,
      raw: HorizontalLinkCardsRaw,
    },
    {
      id: "05",
      name: "Actions with shared borders",
      component: <ActionsWithSharedBorders />,
      raw: ActionsWithSharedBordersRaw,
    },
    {
      id: "06",
      name: "Images with details",
      component: <ImagesWithDetails />,
      raw: ImagesWithDetailsRaw,
    },
    {
      id: "07",
      name: "Logos cards with description list",
      component: <LogosCardsWithDescriptionList />,
      raw: LogosCardsWithDescriptionListRaw,
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

export default GridListsDemoPage;
