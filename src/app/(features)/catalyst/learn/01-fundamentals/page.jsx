import { Button } from "@/ui/catalyst/button";
import { Divider } from "@/ui/catalyst/divider";
import { Heading, Subheading } from "@/ui/catalyst/heading";
import { Link } from "@/ui/catalyst/link";
import { Code, Strong, Text } from "@/ui/catalyst/text";

export const metadata = {
  title: "Fundamentals - Catalyst Learn",
};

export default function FundamentalsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <div>
        <Heading>Module 01: Fundamentals</Heading>
        <Subheading>The atoms of UI: Typography and Actions.</Subheading>
        <Text className="mt-4">
          Every interface starts with these basic building blocks. Catalyst
          provides opinionated, accessible wrappers for standard HTML elements.
        </Text>
      </div>

      <section className="space-y-6">
        <Heading level={2}>1. Typography</Heading>
        <Text>
          Use <Code>Heading</Code>, <Code>Subheading</Code>, and{" "}
          <Code>Text</Code> to maintain consistent vertical rhythm and
          readability.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-6 dark:border-white/10">
          <Heading>Page Title</Heading>
          <Subheading>Section subtitle or description.</Subheading>
          <Text className="mt-4">
            This is a standard paragraph using <Code>&lt;Text&gt;</Code>. It
            handles colors for light and dark modes automatically. You can also
            use <Strong>&lt;Strong&gt;</Strong> for emphasis and{" "}
            <Code>&lt;Code&gt;</Code> for technical terms.
          </Text>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>2. Buttons</Heading>
        <Text>
          The <Code>Button</Code> component is polymorphic. It determines
          whether to render a <Code>&lt;button&gt;</Code> or an{" "}
          <Code>&lt;a&gt;</Code> tag based on the presence of the{" "}
          <Code>href</Code> prop.
        </Text>

        <div className="flex flex-wrap gap-4 rounded-xl border border-zinc-950/10 p-6 dark:border-white/10">
          <Button>Solid (Default)</Button>
          <Button outline>Outline</Button>
          <Button plain>Plain</Button>
          <Button color="red">Red Color</Button>
          <Button href="#">As Link</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <Heading level={2}>3. Links</Heading>
        <Text>
          Use <Code>Link</Code> for interactive text elements that navigate. It
          integrates with your router (e.g., Next.js Link) if configured in{" "}
          <Code>ui/catalyst/link.jsx</Code>.
        </Text>

        <div className="rounded-xl border border-zinc-950/10 p-6 dark:border-white/10">
          <Text>
            Visit the <Link href="/catalyst">Catalyst Home</Link> to see more.
          </Text>
        </div>
      </section>

      <div className="flex justify-end pt-6">
        <Button href="/catalyst/learn/02-forms" color="blue">
          Next: Forms & Inputs &rarr;
        </Button>
      </div>
    </div>
  );
}
