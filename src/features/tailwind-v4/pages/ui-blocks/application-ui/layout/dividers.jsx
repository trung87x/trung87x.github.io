import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. With label
import WithLabel from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_label";
import WithLabelRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_label.jsx?raw";

// 02. With icon
import WithIcon from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_icon";
import WithIconRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_icon.jsx?raw";

// 03. With label on left
import WithLabelOnLeft from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_label_on_left";
import WithLabelOnLeftRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_label_on_left.jsx?raw";

// 04. With title
import WithTitle from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_title";
import WithTitleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_title.jsx?raw";

// 05. With title on left
import WithTitleOnLeft from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_title_on_left";
import WithTitleOnLeftRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_title_on_left.jsx?raw";

// 06. With button
import WithButton from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_button";
import WithButtonRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_button.jsx?raw";

// 07. With title and button
import WithTitleAndButton from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_title_and_button";
import WithTitleAndButtonRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_title_and_button.jsx?raw";

// 08. With toolbar
import WithToolbar from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_toolbar";
import WithToolbarRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/layout/dividers/with_toolbar.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const DividersDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "With label",
      component: <WithLabel />,
      raw: WithLabelRaw,
    },
    {
      id: "02",
      name: "With icon",
      component: <WithIcon />,
      raw: WithIconRaw,
    },
    {
      id: "03",
      name: "With label on left",
      component: <WithLabelOnLeft />,
      raw: WithLabelOnLeftRaw,
    },
    {
      id: "04",
      name: "With title",
      component: <WithTitle />,
      raw: WithTitleRaw,
    },
    {
      id: "05",
      name: "With title on left",
      component: <WithTitleOnLeft />,
      raw: WithTitleOnLeftRaw,
    },
    {
      id: "06",
      name: "With button",
      component: <WithButton />,
      raw: WithButtonRaw,
    },
    {
      id: "07",
      name: "With title and button",
      component: <WithTitleAndButton />,
      raw: WithTitleAndButtonRaw,
    },
    {
      id: "08",
      name: "With toolbar",
      component: <WithToolbar />,
      raw: WithToolbarRaw,
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

export default DividersDemoPage;
