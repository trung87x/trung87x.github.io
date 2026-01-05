import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// ----------------------------------------------------------------------
// IMPORTS (Sử dụng dấu gạch dưới _)
// ----------------------------------------------------------------------

// 01. Simple list
import SimpleList from "@/component-plus/application-ui/forms/radio-groups/simple_list";
import SimpleListRaw from "@/component-plus/application-ui/forms/radio-groups/simple_list.jsx?raw";

// 02. Simple inline list
import SimpleInlineList from "@/component-plus/application-ui/forms/radio-groups/simple_inline_list";
import SimpleInlineListRaw from "@/component-plus/application-ui/forms/radio-groups/simple_inline_list.jsx?raw";

// 03. List with description
import ListWithDescription from "@/component-plus/application-ui/forms/radio-groups/list_with_description";
import ListWithDescriptionRaw from "@/component-plus/application-ui/forms/radio-groups/list_with_description.jsx?raw";

// 04. List with inline description
import ListWithInlineDescription from "@/component-plus/application-ui/forms/radio-groups/list_with_inline_description";
import ListWithInlineDescriptionRaw from "@/component-plus/application-ui/forms/radio-groups/list_with_inline_description.jsx?raw";

// 05. List with radio on right
import ListWithRadioOnRight from "@/component-plus/application-ui/forms/radio-groups/list_with_radio_on_right";
import ListWithRadioOnRightRaw from "@/component-plus/application-ui/forms/radio-groups/list_with_radio_on_right.jsx?raw";

// 06. Simple list with radio on right
import SimpleListWithRadioOnRight from "@/component-plus/application-ui/forms/radio-groups/simple_list_with_radio_on_right";
import SimpleListWithRadioOnRightRaw from "@/component-plus/application-ui/forms/radio-groups/simple_list_with_radio_on_right.jsx?raw";

// 07. Simple table
import SimpleTable from "@/component-plus/application-ui/forms/radio-groups/simple_table";
import SimpleTableRaw from "@/component-plus/application-ui/forms/radio-groups/simple_table.jsx?raw";

// 08. List with descriptions in panel
import ListWithDescriptionsInPanel from "@/component-plus/application-ui/forms/radio-groups/list_with_descriptions_in_panel";
import ListWithDescriptionsInPanelRaw from "@/component-plus/application-ui/forms/radio-groups/list_with_descriptions_in_panel.jsx?raw";

// 09. Color picker
import ColorPicker from "@/component-plus/application-ui/forms/radio-groups/color_picker";
import ColorPickerRaw from "@/component-plus/application-ui/forms/radio-groups/color_picker.jsx?raw";

// 10. Cards
import Cards from "@/component-plus/application-ui/forms/radio-groups/cards";
import CardsRaw from "@/component-plus/application-ui/forms/radio-groups/cards.jsx?raw";

// 11. Small cards
import SmallCards from "@/component-plus/application-ui/forms/radio-groups/small_cards";
import SmallCardsRaw from "@/component-plus/application-ui/forms/radio-groups/small_cards.jsx?raw";

// 12. Stacked cards
import StackedCards from "@/component-plus/application-ui/forms/radio-groups/stacked_cards";
import StackedCardsRaw from "@/component-plus/application-ui/forms/radio-groups/stacked_cards.jsx?raw";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const RadioGroupsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Simple list",
      component: <SimpleList />,
      raw: SimpleListRaw,
    },
    {
      id: "02",
      name: "Simple inline list",
      component: <SimpleInlineList />,
      raw: SimpleInlineListRaw,
    },
    {
      id: "03",
      name: "List with description",
      component: <ListWithDescription />,
      raw: ListWithDescriptionRaw,
    },
    {
      id: "04",
      name: "List with inline description",
      component: <ListWithInlineDescription />,
      raw: ListWithInlineDescriptionRaw,
    },
    {
      id: "05",
      name: "List with radio on right",
      component: <ListWithRadioOnRight />,
      raw: ListWithRadioOnRightRaw,
    },
    {
      id: "06",
      name: "Simple list with radio on right",
      component: <SimpleListWithRadioOnRight />,
      raw: SimpleListWithRadioOnRightRaw,
    },
    {
      id: "07",
      name: "Simple table",
      component: <SimpleTable />,
      raw: SimpleTableRaw,
    },
    {
      id: "08",
      name: "List with descriptions in panel",
      component: <ListWithDescriptionsInPanel />,
      raw: ListWithDescriptionsInPanelRaw,
    },
    {
      id: "09",
      name: "Color picker",
      component: <ColorPicker />,
      raw: ColorPickerRaw,
    },
    { id: "10", name: "Cards", component: <Cards />, raw: CardsRaw },
    {
      id: "11",
      name: "Small cards",
      component: <SmallCards />,
      raw: SmallCardsRaw,
    },
    {
      id: "12",
      name: "Stacked cards",
      component: <StackedCards />,
      raw: StackedCardsRaw,
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

export default RadioGroupsDemoPage;
