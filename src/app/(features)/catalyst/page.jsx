import { Button } from "@/ui/catalyst/button";
import { Heading, Subheading } from "@/ui/catalyst/heading";

export const metadata = {
  title: "Catalyst Showcase",
  description: "A component showcase using Tailwind Catalyst.",
};

export default function CatalystPage() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <Heading>Catalyst Showcase</Heading>
      <Subheading className="mt-2">
        Explore a set of example pages built using Tailwind Catalyst atom
        components.
      </Subheading>

      {/* Learn Section */}
      <div className="mt-8 rounded-2xl border border-zinc-950/10 bg-zinc-950/5 p-8 dark:border-white/10 dark:bg-white/5">
        <Heading level={2}>New to Catalyst?</Heading>
        <p className="mt-2 text-base/6 text-zinc-500 dark:text-zinc-400">
          Start with our interactive tutorials to master the component library,
          from atoms to complex overlays.
        </p>
        <div className="mt-6">
          <Button href="/catalyst/learn">Start Learning &rarr;</Button>
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {/* Basic Information */}
        <section className="flex flex-col items-start gap-4 rounded-xl border border-zinc-950/5 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/5">
          <Heading level={2} className="!text-lg">
            Basic
          </Heading>
          <p className="text-zinc-500 dark:text-zinc-400">
            A simple contact form demonstrating basic inputs and buttons.
          </p>
          <Button
            href="/catalyst/contact"
            color="blue"
            className="mt-auto w-full"
          >
            View Contact Form
          </Button>
        </section>

        {/* Intermediate Settings */}
        <section className="flex flex-col items-start gap-4 rounded-xl border border-zinc-950/5 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/5">
          <Heading level={2} className="!text-lg">
            Intermediate
          </Heading>
          <p className="text-zinc-500 dark:text-zinc-400">
            User settings layout with toggles, selects, and avatars.
          </p>
          <Button
            href="/catalyst/settings"
            color="cyan"
            className="mt-auto w-full"
          >
            View Settings
          </Button>
        </section>

        {/* Advanced Dashboard */}
        <section className="flex flex-col items-start gap-4 rounded-xl border border-zinc-950/5 bg-zinc-50 p-6 dark:border-white/5 dark:bg-white/5">
          <Heading level={2} className="!text-lg">
            Advanced
          </Heading>
          <p className="text-zinc-500 dark:text-zinc-400">
            Complex data dashboard with tables, badges, and pagination.
          </p>
          <Button
            href="/catalyst/dashboard"
            color="violet"
            className="mt-auto w-full"
          >
            View Dashboard
          </Button>
        </section>
      </div>
    </div>
  );
}
