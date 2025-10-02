import { initRouter } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded!");

  const btn = document.createElement("button");
  btn.textContent = "🌙 Dark Mode";
  btn.className =
    "fixed bottom-4 right-4 px-3 py-2 rounded bg-gray-800 text-white";
  document.body.appendChild(btn);

  btn.onclick = () => {
    document.documentElement.classList.toggle("dark");
  };

  initRouter();
});
