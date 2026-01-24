import { Button } from "@/ui/catalyst/button";
import { Heading, Subheading } from "@/ui/catalyst/heading";
import { Text } from "@/ui/catalyst/text";

export const metadata = {
  title: "Catalyst Learn",
  description:
    "Master Tailwind Catalyst components through interactive tutorials.",
};

const modules = [
  {
    id: "01",
    title: "Fundamentals",
    description: "Learn the basic atoms: Buttons, Headings, Text, and Links.",
    href: "/catalyst/learn/01-fundamentals",
    color: "blue",
  },
  {
    id: "02",
    title: "Forms & Inputs",
    description:
      "Master data entry with Inputs, Selects, Switches, and Fieldsets.",
    href: "/catalyst/learn/02-forms",
    color: "indigo",
  },
  {
    id: "03",
    title: "Application Layouts",
    description: "Understand Navbar, Sidebar, and Stacked layouts.",
    href: "/catalyst/learn/03-layouts",
    color: "violet",
  },
  {
    id: "04",
    title: "Overlays & Feedback",
    description: "Manage Dialogs, Alerts, and Dropdown menus.",
    href: "/catalyst/learn/04-overlays",
    color: "pink",
  },
  {
    id: "05",
    title: "Data Display",
    description: "Present data effectively with Tables, Badges, and Avatars.",
    href: "/catalyst/learn/05-data",
    color: "cyan",
  },
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl cursor-default">
      <Heading>Catalyst Learn</Heading>
      <Subheading>
        Interactive tutorials to master the Catalyst component library.
      </Subheading>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <div
            key={module.id}
            className="group flex flex-col rounded-xl border border-zinc-950/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900"
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex size-10 items-center justify-center rounded-lg bg-${module.color}-500/10 text-sm font-bold text-${module.color}-600 dark:bg-${module.color}-400/10 dark:text-${module.color}-400`}
              >
                {module.id}
              </span>
              <Heading level={3} className="!text-base">
                {module.title}
              </Heading>
            </div>
            <Text className="mt-4 flex-grow">{module.description}</Text>
            <div className="mt-6">
              <Button
                href={module.href}
                outline
                className="w-full group-hover:bg-zinc-50 dark:group-hover:bg-white/5"
              >
                Start Module
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
