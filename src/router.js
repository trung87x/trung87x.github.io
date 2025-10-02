import { HomeView } from "./views/home.js";
import { AboutView } from "./views/about.js";
import { ProjectsView } from "./views/projects.js";
import { ContactView } from "./views/contact.js";

function parseHash() {
  const h = location.hash || "#/";
  const path = h.slice(1) || "/";
  return path;
}

function setActiveLink(path) {
  document.querySelectorAll(".navlink").forEach((a) => {
    const isActive = a.getAttribute("href").slice(1) === path;
    a.classList.toggle("text-blue-600", isActive);
    a.classList.toggle("font-semibold", isActive);
    a.classList.toggle("underline", isActive);
  });
}

export function initRouter() {
  const mount = document.getElementById("app-main");

  async function render() {
    const path = parseHash();
    setActiveLink(path);

    const routes = {
      "/": HomeView,
      "/about": AboutView,
      "/projects": ProjectsView,
      "/contact": ContactView,
    };

    const View = routes[path];
    if (!View) {
      mount.innerHTML = `
        <section class="container mx-auto py-16 px-4">
          <h2 class="text-2xl font-semibold mb-2">404</h2>
          <p class="text-gray-600">Trang bạn tìm không tồn tại.</p>
          <a class="text-blue-600 underline" href="#/">Quay về trang chủ</a>
        </section>`;
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    mount.innerHTML = await View();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "#/";
  render();
}
