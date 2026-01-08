import PreviewWrapper from "@/core/preview-system/PreviewWrapper";

// 01. Basic
import Basic from "@/features/tailwind-v4/components/ui-kit/table/basic";
import BasicRaw from "@/features/tailwind-v4/components/ui-kit/table/basic.jsx?raw";

// 02. Responsive tables
import ResponsiveTable from "@/features/tailwind-v4/components/ui-kit/table/responsive-table";
import ResponsiveTableRaw from "@/features/tailwind-v4/components/ui-kit/table/responsive-table.jsx?raw";

// 03. Full-width tables
import FullWidthTable from "@/features/tailwind-v4/components/ui-kit/table/full-width";
import FullWidthTableRaw from "@/features/tailwind-v4/components/ui-kit/table/full-width.jsx?raw";

// 04. Rows as links
import RowsAsLinks from "@/features/tailwind-v4/components/ui-kit/table/rows-as-links";
import RowsAsLinksRaw from "@/features/tailwind-v4/components/ui-kit/table/rows-as-links.jsx?raw";

// 05. With condensed spacing
import CondensedTable from "@/features/tailwind-v4/components/ui-kit/table/condensed-spacing";
import CondensedTableRaw from "@/features/tailwind-v4/components/ui-kit/table/condensed-spacing.jsx?raw";

// 06. With grid lines
import GridLinesTable from "@/features/tailwind-v4/components/ui-kit/table/grid-lines";
import GridLinesTableRaw from "@/features/tailwind-v4/components/ui-kit/table/grid-lines.jsx?raw";

// 07. With striped rows
import StripedRowsTable from "@/features/tailwind-v4/components/ui-kit/table/striped-rows";
import StripedRowsTableRaw from "@/features/tailwind-v4/components/ui-kit/table/striped-rows.jsx?raw";

// 08. With different heading color
import HeadingColorTable from "@/features/tailwind-v4/components/ui-kit/table/heading-color";
import HeadingColorTableRaw from "@/features/tailwind-v4/components/ui-kit/table/heading-color.jsx?raw";

// 09. With complex content
import ComplexContentTable from "@/features/tailwind-v4/components/ui-kit/table/complex-content";
import ComplexContentTableRaw from "@/features/tailwind-v4/components/ui-kit/table/complex-content.jsx?raw";

// 10. With pagination
import TableWithPagination from "@/features/tailwind-v4/components/ui-kit/table/with-pagination";
import TableWithPaginationRaw from "@/features/tailwind-v4/components/ui-kit/table/with-pagination.jsx?raw";

// 11. With dropdowns
import TableWithDropdowns from "@/features/tailwind-v4/components/ui-kit/table/with-dropdowns";
import TableWithDropdownsRaw from "@/features/tailwind-v4/components/ui-kit/table/with-dropdowns.jsx?raw";

// 12. In dialog
import TableInDialog from "@/features/tailwind-v4/components/ui-kit/table/in-dialog";
import TableInDialogRaw from "@/features/tailwind-v4/components/ui-kit/table/in-dialog.jsx?raw";

const mockUsers = [
  {
    handle: "trung-dinh",
    name: "Đinh Quang Trung",
    email: "trung.dinh@example.com",
    access: "Admin",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: true,
  },
  {
    handle: "erica-h",
    name: "Erica Hancock",
    email: "erica.h@example.com",
    access: "Editor",
    avatarUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: false,
  },
  {
    handle: "giao-g",
    name: "Giao Giao",
    email: "giao.g@example.com",
    access: "Viewer",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: true,
  },
];

const mockPlayers = [
  {
    rank: 1,
    name: "Leon Draisaitl",
    position: "C",
    gamesPlayed: 71,
    goals: 31,
    assists: 68,
    points: 99,
    plusMinus: -9,
  },
  {
    rank: 2,
    name: "Connor McDavid",
    position: "C",
    gamesPlayed: 64,
    goals: 31,
    assists: 65,
    points: 96,
    plusMinus: -7,
  },
  {
    rank: 3,
    name: "David Pastrnak",
    position: "RW",
    gamesPlayed: 70,
    goals: 48,
    assists: 47,
    points: 95,
    plusMinus: 21,
  },
  {
    rank: 4,
    name: "Artemi Panarin",
    position: "LW",
    gamesPlayed: 69,
    goals: 32,
    assists: 63,
    points: 95,
    plusMinus: 36,
  },
];

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Basic Table",
      component: <Basic users={mockUsers} />,
      raw: BasicRaw,
    },
    {
      id: "02",
      name: "Responsive Tables",
      component: <ResponsiveTable users={mockUsers} />,
      raw: ResponsiveTableRaw,
    },
    {
      id: "03",
      name: "Full-width Tables",
      component: <FullWidthTable users={mockUsers} />,
      raw: FullWidthTableRaw,
    },
    {
      id: "04",
      name: "Rows as Links",
      component: <RowsAsLinks users={mockUsers} />,
      raw: RowsAsLinksRaw,
    },
    {
      id: "05",
      name: "With Condensed Spacing",
      component: <CondensedTable players={mockPlayers} />,
      raw: CondensedTableRaw,
    },
    {
      id: "06",
      name: "With Grid Lines",
      component: <GridLinesTable users={mockUsers} />,
      raw: GridLinesTableRaw,
    },
    {
      id: "07",
      name: "With Striped Rows",
      component: <StripedRowsTable users={mockUsers} />,
      raw: StripedRowsTableRaw,
    },
    {
      id: "08",
      name: "With Different Heading Color",
      component: <HeadingColorTable users={mockUsers} />,
      raw: HeadingColorTableRaw,
    },
    {
      id: "09",
      name: "With Complex Content",
      component: <ComplexContentTable users={mockUsers} />,
      raw: ComplexContentTableRaw,
    },
    {
      id: "10",
      name: "With Pagination",
      component: <TableWithPagination users={mockUsers} />,
      raw: TableWithPaginationRaw,
    },
    {
      id: "11",
      name: "With Dropdowns",
      component: <TableWithDropdowns users={mockUsers} />,
      raw: TableWithDropdownsRaw,
    },
    {
      id: "12",
      name: "In Dialog",
      component: <TableInDialog users={mockUsers} />,
      raw: TableInDialogRaw,
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
            <div className="overflow-hidden rounded-lg bg-white">
              {layout.component}
            </div>
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
