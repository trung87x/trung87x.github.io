import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Invoice panels
import InvoicePanels from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-history/invoice_panels";
import InvoicePanelsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-history/invoice_panels.jsx?raw";

// 02. Invoice table
import InvoiceTable from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-history/invoice_table";
import InvoiceTableRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-history/invoice_table.jsx?raw";

// 03. Invoice list
import InvoiceList from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-history/invoice_list";
import InvoiceListRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-history/invoice_list.jsx?raw";

// 04. Invoice list with quick actions
import InvoiceListWithQuickActions from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-history/invoice_list_with_quick_actions";
import InvoiceListWithQuickActionsRaw from "@/features/tailwind-v4/components/ui-blocks/ecommerce/components/order-history/invoice_list_with_quick_actions.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const OrderHistoryDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Invoice panels",
      component: <InvoicePanels />,
      raw: InvoicePanelsRaw,
    },
    {
      id: "02",
      name: "Invoice table",
      component: <InvoiceTable />,
      raw: InvoiceTableRaw,
    },
    {
      id: "03",
      name: "Invoice list",
      component: <InvoiceList />,
      raw: InvoiceListRaw,
    },
    {
      id: "04",
      name: "Invoice list with quick actions",
      component: <InvoiceListWithQuickActions />,
      raw: InvoiceListWithQuickActionsRaw,
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

export default OrderHistoryDemoPage;
