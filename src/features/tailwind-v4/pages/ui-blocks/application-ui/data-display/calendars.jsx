import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Small with meetings
import SmallWithMeetings from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/small_with_meetings";
import SmallWithMeetingsRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/small_with_meetings.jsx?raw";

// 02. Month view
import MonthView from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/month_view";
import MonthViewRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/month_view.jsx?raw";

// 03. Week view
import WeekView from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/week_view";
import WeekViewRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/week_view.jsx?raw";

// 04. Day view
import DayView from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/day_view";
import DayViewRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/day_view.jsx?raw";

// 05. Year view
import YearView from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/year_view";
import YearViewRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/year_view.jsx?raw";

// 06. Double
import Double from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/double";
import DoubleRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/double.jsx?raw";

// 07. Borderless stacked
import BorderlessStacked from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/borderless_stacked";
import BorderlessStackedRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/borderless_stacked.jsx?raw";

// 08. Borderless side-by-side
import BorderlessSideBySide from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/borderless_side_by_side";
import BorderlessSideBySideRaw from "@/features/tailwind-v4/components/ui-blocks/application-ui/data-display/calendars/borderless_side_by_side.jsx?raw";

const CalendarsDemoPage = () => {
  const layouts = [
    {
      id: "01",
      name: "Small with meetings",
      component: <SmallWithMeetings />,
      raw: SmallWithMeetingsRaw,
    },
    {
      id: "02",
      name: "Month view",
      component: <MonthView />,
      raw: MonthViewRaw,
    },
    {
      id: "03",
      name: "Week view",
      component: <WeekView />,
      raw: WeekViewRaw,
    },
    {
      id: "04",
      name: "Day view",
      component: <DayView />,
      raw: DayViewRaw,
    },
    {
      id: "05",
      name: "Year view",
      component: <YearView />,
      raw: YearViewRaw,
    },
    {
      id: "06",
      name: "Double",
      component: <Double />,
      raw: DoubleRaw,
    },
    {
      id: "07",
      name: "Borderless stacked",
      component: <BorderlessStacked />,
      raw: BorderlessStackedRaw,
    },
    {
      id: "08",
      name: "Borderless side-by-side",
      component: <BorderlessSideBySide />,
      raw: BorderlessSideBySideRaw,
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

export default CalendarsDemoPage;
