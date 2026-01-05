import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple
import Simple from "@/component-plus/ecommerce/page-examples/order-history-pages/simple";
import SimpleRaw from "@/component-plus/ecommerce/page-examples/order-history-pages/simple.jsx?raw";

// 02. With invoice list and quick actions
import WithInvoiceListAndQuickActions from "@/component-plus/ecommerce/page-examples/order-history-pages/with_invoice_list_and_quick_actions";
import WithInvoiceListAndQuickActionsRaw from "@/component-plus/ecommerce/page-examples/order-history-pages/with_invoice_list_and_quick_actions.jsx?raw";

// 03. With invoice panels
import WithInvoicePanels from "@/component-plus/ecommerce/page-examples/order-history-pages/with_invoice_panels";
import WithInvoicePanelsRaw from "@/component-plus/ecommerce/page-examples/order-history-pages/with_invoice_panels.jsx?raw";

// 04. With invoice tables
import WithInvoiceTables from "@/component-plus/ecommerce/page-examples/order-history-pages/with_invoice_tables";
import WithInvoiceTablesRaw from "@/component-plus/ecommerce/page-examples/order-history-pages/with_invoice_tables.jsx?raw";

// 05. With invoice list
import WithInvoiceList from "@/component-plus/ecommerce/page-examples/order-history-pages/with_invoice_list";
import WithInvoiceListRaw from "@/component-plus/ecommerce/page-examples/order-history-pages/with_invoice_list.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const OrderHistoryPagesDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple",
      component: <Simple />,
      raw: SimpleRaw,
    },
    {
      id: "02",
      name: "With invoice list and quick actions",
      component: <WithInvoiceListAndQuickActions />,
      raw: WithInvoiceListAndQuickActionsRaw,
    },
    {
      id: "03",
      name: "With invoice panels",
      component: <WithInvoicePanels />,
      raw: WithInvoicePanelsRaw,
    },
    {
      id: "04",
      name: "With invoice tables",
      component: <WithInvoiceTables />,
      raw: WithInvoiceTablesRaw,
    },
    {
      id: "05",
      name: "With invoice list",
      component: <WithInvoiceList />,
      raw: WithInvoiceListRaw,
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

export default OrderHistoryPagesDemoPage;
