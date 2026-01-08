import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Stacked with footer actions
import StackedWithFooterActions from "@/components/ui-blocks/marketing/elements/flyout-menus/stacked_with_footer_actions";
import StackedWithFooterActionsRaw from "@/components/ui-blocks/marketing/elements/flyout-menus/stacked_with_footer_actions.jsx?raw";

// 02. Full-width two-columns
import FullWidthTwoColumns from "@/components/ui-blocks/marketing/elements/flyout-menus/full_width_two_columns";
import FullWidthTwoColumnsRaw from "@/components/ui-blocks/marketing/elements/flyout-menus/full_width_two_columns.jsx?raw";

// 03. Stacked with footer list
import StackedWithFooterList from "@/components/ui-blocks/marketing/elements/flyout-menus/stacked_with_footer_list";
import StackedWithFooterListRaw from "@/components/ui-blocks/marketing/elements/flyout-menus/stacked_with_footer_list.jsx?raw";

// 04. Full-width
import FullWidth from "@/components/ui-blocks/marketing/elements/flyout-menus/full_width";
import FullWidthRaw from "@/components/ui-blocks/marketing/elements/flyout-menus/full_width.jsx?raw";

// 05. Simple with descriptions
import SimpleWithDescriptions from "@/components/ui-blocks/marketing/elements/flyout-menus/simple_with_descriptions";
import SimpleWithDescriptionsRaw from "@/components/ui-blocks/marketing/elements/flyout-menus/simple_with_descriptions.jsx?raw";

// 06. Two-column
import TwoColumn from "@/components/ui-blocks/marketing/elements/flyout-menus/two_column";
import TwoColumnRaw from "@/components/ui-blocks/marketing/elements/flyout-menus/two_column.jsx?raw";

// 07. Simple
import Simple from "@/components/ui-blocks/marketing/elements/flyout-menus/simple";
import SimpleRaw from "@/components/ui-blocks/marketing/elements/flyout-menus/simple.jsx?raw";

const FlyoutMenusDemoPage = () => {
  return (
    <div className="space-y-10 pb-20">
      {/* 01. Stacked with footer actions */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          01. Stacked with footer actions
        </h2>
        <PreviewWrapper
          name="Stacked with footer actions"
          code={StackedWithFooterActionsRaw}
        >
          <StackedWithFooterActions />
        </PreviewWrapper>
      </section>

      {/* 02. Full-width two-columns */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          02. Full-width two-columns
        </h2>
        <PreviewWrapper
          name="Full-width two-columns"
          code={FullWidthTwoColumnsRaw}
        >
          <FullWidthTwoColumns />
        </PreviewWrapper>
      </section>

      {/* 03. Stacked with footer list */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          03. Stacked with footer list
        </h2>
        <PreviewWrapper
          name="Stacked with footer list"
          code={StackedWithFooterListRaw}
        >
          <StackedWithFooterList />
        </PreviewWrapper>
      </section>

      {/* 04. Full-width */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">04. Full-width</h2>
        <PreviewWrapper name="Full-width flyout" code={FullWidthRaw}>
          <FullWidth />
        </PreviewWrapper>
      </section>

      {/* 05. Simple with descriptions */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          05. Simple with descriptions
        </h2>
        <PreviewWrapper
          name="Simple with descriptions"
          code={SimpleWithDescriptionsRaw}
        >
          <SimpleWithDescriptions />
        </PreviewWrapper>
      </section>

      {/* 06. Two-column */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">06. Two-column</h2>
        <PreviewWrapper name="Two-column flyout" code={TwoColumnRaw}>
          <TwoColumn />
        </PreviewWrapper>
      </section>

      {/* 07. Simple */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-gray-800">07. Simple</h2>
        <PreviewWrapper name="Simple flyout" code={SimpleRaw}>
          <Simple />
        </PreviewWrapper>
      </section>
    </div>
  );
};

export default FlyoutMenusDemoPage;
