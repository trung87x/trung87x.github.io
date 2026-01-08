import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Contained
import Contained from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/breadcrumbs/contained";
import ContainedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/breadcrumbs/contained.jsx?raw";

// 02. Full-width bar
import FullWidthBar from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/breadcrumbs/full_width_bar";
import FullWidthBarRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/breadcrumbs/full_width_bar.jsx?raw";

// 03. Simple with chevrons
import SimpleWithChevrons from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/breadcrumbs/simple_with_chevrons";
import SimpleWithChevronsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/breadcrumbs/simple_with_chevrons.jsx?raw";

// 04. Simple with slashes
import SimpleWithSlashes from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/breadcrumbs/simple_with_slashes";
import SimpleWithSlashesRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/navigation/breadcrumbs/simple_with_slashes.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const BreadcrumbsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Contained",
      component: <Contained />,
      raw: ContainedRaw,
    },
    {
      id: "02",
      name: "Full-width bar",
      component: <FullWidthBar />,
      raw: FullWidthBarRaw,
    },
    {
      id: "03",
      name: "Simple with chevrons",
      component: <SimpleWithChevrons />,
      raw: SimpleWithChevronsRaw,
    },
    {
      id: "04",
      name: "Simple with slashes",
      component: <SimpleWithSlashes />,
      raw: SimpleWithSlashesRaw,
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

export default BreadcrumbsDemoPage;
