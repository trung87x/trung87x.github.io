import projects from "../data/projects.json";

export async function Projects() {
  // const res = await fetch("/src/data/projects.json");
  // const projects = await res.json();

  return `
  <section class="container mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold mb-6">Dự án</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${projects
        .map(
          (p) => `
        <article class="bg-white shadow p-4 rounded">
          <h4 class="font-bold">${p.title}</h4>
          <p class="text-gray-600">${p.desc}</p>
          ${
            p.link
              ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer"
                   class="inline-block mt-2 text-blue-600 underline text-sm">Xem chi tiết</a>`
              : ""
          }
          ${
            p.tags && p.tags.length
              ? `<p class="text-xs text-gray-500 mt-1">#${p.tags.join(
                  " #",
                )}</p>`
              : ""
          }
        </article>`,
        )
        .join("")}
    </div>
  </section>`;
}
