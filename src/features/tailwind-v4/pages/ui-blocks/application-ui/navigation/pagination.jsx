import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Card footer with page buttons
import CardFooterWithPageButtons from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/pagination/card_footer_with_page_buttons";
import CardFooterWithPageButtonsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/pagination/card_footer_with_page_buttons.jsx?raw";

// 02. Centered page numbers
import CenteredPageNumbers from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/pagination/centered_page_numbers";
import CenteredPageNumbersRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/pagination/centered_page_numbers.jsx?raw";

// 03. Simple card footer
import SimpleCardFooter from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/pagination/simple_card_footer";
import SimpleCardFooterRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/pagination/simple_card_footer.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const PaginationDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Card footer with page buttons",
      component: <CardFooterWithPageButtons />,
      raw: CardFooterWithPageButtonsRaw,
    },
    {
      id: "02",
      name: "Centered page numbers",
      component: <CenteredPageNumbers />,
      raw: CenteredPageNumbersRaw,
    },
    {
      id: "03",
      name: "Simple card footer",
      component: <SimpleCardFooter />,
      raw: SimpleCardFooterRaw,
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

export default PaginationDemoPage;
