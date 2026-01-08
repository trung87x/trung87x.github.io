import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Drawer
import Drawer from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/modal";
import DrawerRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/modal.jsx?raw";

// 02. Two column with quantity dropdown
import TwoColumnWithQuantityDropdown from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/two_column_with_quantity_dropdown";
import TwoColumnWithQuantityDropdownRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/two_column_with_quantity_dropdown.jsx?raw";

// 03. Single column
import SingleColumn from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/single_column";
import SingleColumnRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/single_column.jsx?raw";

// 04. With extended summary
import WithExtendedSummary from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/with_extended_summary";
import WithExtendedSummaryRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/with_extended_summary.jsx?raw";

// 05. Dialog
import Dialog from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/slide_over";
import DialogRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/slide_over.jsx?raw";

// 06. Popover
import Popover from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/popover";
import PopoverRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/shopping-carts/popover.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const ShoppingCartsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Drawer",
      component: <Drawer />,
      raw: DrawerRaw,
    },
    {
      id: "02",
      name: "Two column with quantity dropdown",
      component: <TwoColumnWithQuantityDropdown />,
      raw: TwoColumnWithQuantityDropdownRaw,
    },
    {
      id: "03",
      name: "Single column",
      component: <SingleColumn />,
      raw: SingleColumnRaw,
    },
    {
      id: "04",
      name: "With extended summary",
      component: <WithExtendedSummary />,
      raw: WithExtendedSummaryRaw,
    },
    {
      id: "05",
      name: "Dialog",
      component: <Dialog />,
      raw: DialogRaw,
    },
    {
      id: "06",
      name: "Popover",
      component: <Popover />,
      raw: PopoverRaw,
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

export default ShoppingCartsDemoPage;
