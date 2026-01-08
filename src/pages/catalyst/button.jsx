import PreviewWrapper from "@/features/preview-system/PreviewWrapper";

// 01. Button colors
import ButtonColors from "@/components/ui-kit/button/button-colors";
import ButtonColorsRaw from "@/components/blocks/button/button-colors.jsx?raw";

// 02. Outline buttons
import OutlineButtons from "@/components/ui-kit/button/outline-buttons";
import OutlineButtonsRaw from "@/components/blocks/button/outline-buttons.jsx?raw";

// 03. Plain buttons
import PlainButtons from "@/components/ui-kit/button/plain-buttons";
import PlainButtonsRaw from "@/components/blocks/button/plain-buttons.jsx?raw";

// 04. Disabled states
import DisabledStates from "@/components/ui-kit/button/disabled-states";
import DisabledStatesRaw from "@/components/blocks/button/disabled-states.jsx?raw";

// 05. With icon
import ButtonWithIcon from "@/components/ui-kit/button/with-icon";
import ButtonWithIconRaw from "@/components/blocks/button/with-icon.jsx?raw";

// 06. Using as a link
import ButtonAsLink from "@/components/ui-kit/button/as-link";
import ButtonAsLinkRaw from "@/components/blocks/button/as-link.jsx?raw";

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Button Colors",
      component: <ButtonColors />,
      raw: ButtonColorsRaw,
    },
    {
      id: "02",
      name: "Outline Buttons",
      component: <OutlineButtons />,
      raw: OutlineButtonsRaw,
    },
    {
      id: "03",
      name: "Plain Buttons",
      component: <PlainButtons />,
      raw: PlainButtonsRaw,
    },
    {
      id: "04",
      name: "Disabled States",
      component: <DisabledStates />,
      raw: DisabledStatesRaw,
    },
    {
      id: "05",
      name: "With Icon",
      component: <ButtonWithIcon />,
      raw: ButtonWithIconRaw,
    },
    {
      id: "06",
      name: "Using as a Link",
      component: <ButtonAsLink />,
      raw: ButtonAsLinkRaw,
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-10 last:border-0"
        >
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

export default Page;
