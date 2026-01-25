import fs from "fs";
import path from "path";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

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
      <div className="p-10 text-center text-red-500">
        Examples directory not found at {examplesDir}
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
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
            Page Examples
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-zinc-500 dark:text-zinc-400">
            A comprehensive collection of full-page UI examples collected from
            the sub-pages.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category) => (
            <section key={category.name} className="relative">
              <div className="mb-8 flex items-center">
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
                <h2 className="px-4 text-2xl font-bold tracking-tight tracking-widest text-zinc-900 uppercase dark:text-white">
                  {category.displayName}
                </h2>
                <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
              </div>

              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
                {category.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.name}
                    className="flex flex-col rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-900/5 transition-all duration-300 hover:ring-indigo-500/50 dark:bg-zinc-800/50 dark:ring-white/10 dark:hover:ring-indigo-400/50"
                  >
                    <h3 className="mb-6 border-b border-zinc-900/5 pb-2 text-xl font-semibold text-indigo-600 dark:border-white/5 dark:text-indigo-400">
                      {subcategory.displayName}
                    </h3>

                    <ul className="flex-1 space-y-4">
                      {subcategory.examples.map((example) => (
                        <li key={example.name}>
                          <Link
                            href={example.url}
                            className="group -mx-3 flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-white/5"
                          >
                            <span className="text-sm font-medium text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-white">
                              {example.displayName}
                            </span>
                            <span className="text-zinc-400 transition-colors group-hover:text-indigo-600 dark:text-zinc-500 dark:group-hover:text-indigo-400">
                              <ChevronRightIcon className="h-5 w-5" />
                            </span>
                          </Link>
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
