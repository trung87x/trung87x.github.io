import fs from "fs";
import path from "path";
import { Heading, Subheading } from "ui/catalyst/heading";
import { Text } from "ui/catalyst/text";
import { Divider } from "ui/catalyst/divider";
import { Button } from "ui/catalyst/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { ThemeSwitcher } from "ui/theme-switcher";

// Helper to format names
function formatName(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Helper to format categories
function formatCategory(slug) {
  return slug
    .replace(/[()]/g, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function PageExamples() {
  const examplesDir = path.join(
    process.cwd(),
    "src/app/(features)/page-examples",
  );

  if (!fs.existsSync(examplesDir)) {
    return (
      <div className="p-10 text-center">
        <Text className="text-red-500">
          Examples directory not found at {examplesDir}
        </Text>
      </div>
    );
  }

  const categories = fs
    .readdirSync(examplesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name.startsWith("("))
    .map((catDirent) => {
      const catPath = path.join(examplesDir, catDirent.name);

      const subcategories = fs
        .readdirSync(catPath, { withFileTypes: true })
        .filter((subDirent) => subDirent.isDirectory())
        .map((subDirent) => {
          const subPath = path.join(catPath, subDirent.name);

          const examples = fs
            .readdirSync(subPath, { withFileTypes: true })
            .filter((exDirent) => exDirent.isDirectory())
            .map((exDirent) => ({
              name: exDirent.name,
              displayName: formatName(exDirent.name),
              url: `/page-examples/${subDirent.name}/${exDirent.name}`,
            }));

          return {
            name: subDirent.name,
            displayName: formatName(subDirent.name),
            examples: examples,
          };
        });

      return {
        name: catDirent.name,
        displayName: formatCategory(catDirent.name),
        subcategories: subcategories,
      };
    });

  return (
    <div className="background min-h-screen px-4 py-16 active:cursor-default sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center text-center">
          <Heading className="display-large ease-emphasized mb-6 transition-all duration-700">
            Page Examples
          </Heading>

          <ThemeSwitcher />

          <Text className="body-large max-w-3xl">
            A comprehensive collection of full-page UI examples collected from
            the sub-pages.
          </Text>
        </div>

        <div className="space-y-24">
          {categories.map((category) => (
            <section key={category.name} className="group/section relative">
              <div className="mb-10 flex items-center gap-6">
                <Divider className="flex-1 opacity-60" />
                <Heading
                  level={2}
                  className="label-large primary-container rounded-full px-4 py-1.5 uppercase"
                >
                  {category.displayName}
                </Heading>
                <Divider className="flex-1 opacity-60" />
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {category.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.name}
                    className="surface-container ease-standard relative flex h-full flex-col overflow-hidden rounded-[24px] p-8 shadow-sm outline transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-6">
                      <Subheading className="headline-small mb-4 flex items-center gap-2">
                        <span className="bg-primary h-6 w-1.5 rounded-full"></span>
                        {subcategory.displayName}
                      </Subheading>
                      <Divider />
                    </div>

                    <ul className="flex-1 space-y-3">
                      {subcategory.examples.map((example) => (
                        <li key={example.name}>
                          <Button
                            href={example.url}
                            plain
                            className="group interactive-surface ease-standard -mx-4 w-full justify-between rounded-xl px-4 py-3 transition-all duration-200"
                          >
                            <span className="title-medium mr-3 truncate transition-colors">
                              {example.displayName}
                            </span>
                            <span className="surface-container-high group-hover:primary flex size-6 items-center justify-center rounded-full transition-all duration-300">
                              <ChevronRightIcon className="size-4 transition-colors" />
                            </span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
