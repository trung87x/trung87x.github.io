(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();function l(){return`
  <!-- Hero -->
  <section class="text-center py-16 bg-blue-600 text-white">
    <h2 class="text-4xl font-bold mb-2">Xin chào 👋 Tôi là Developer</h2>
    <p>Xây dựng web hiện đại với HTML, CSS, JS, Tailwind.</p>
  </section>

  <!-- About -->
  <section class="container mx-auto py-16 px-4">
    <h3 class="text-2xl font-semibold mb-4">Giới thiệu</h3>
    <p>Tôi yêu thích lập trình web và chia sẻ kiến thức về frontend.</p>
  </section>

  <!-- Projects -->
  <section class="container mx-auto py-16 px-4">
    <h3 class="text-2xl font-semibold mb-8">Dự án</h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article class="bg-white shadow p-4 rounded">
        <h4 class="font-bold">Portfolio Website</h4>
        <p class="text-gray-600">Trang web giới thiệu cá nhân.</p>
      </article>
      <article class="bg-white shadow p-4 rounded">
        <h4 class="font-bold">Todo App</h4>
        <p class="text-gray-600">Ứng dụng quản lý công việc.</p>
      </article>
      <article class="bg-white shadow p-4 rounded">
        <h4 class="font-bold">Blog cá nhân</h4>
        <p class="text-gray-600">Viết bài, chia sẻ kiến thức.</p>
      </article>
    </div>
  </section>

  <!-- Contact -->
  <section class="bg-gray-100 py-16 text-center">
    <h3 class="text-2xl font-semibold mb-4">Liên hệ</h3>
    <p>
      Email:
      <a href="mailto:trung.dinhquang@hotmail.com" class="text-blue-600">
        trung.dinhquang@hotmail.com
      </a>
    </p>
  </section>
  `}function a(){return`
  <section class="container mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold mb-4">Giới thiệu</h2>
    <p class="text-gray-700">
      Tôi là Trung — Frontend Developer. Tôi tập trung vào HTML, CSS, JS, Tailwind và xây dựng những UI gọn sạch, hiệu năng tốt.
    </p>
    <ul class="list-disc pl-6 mt-4 text-gray-700 space-y-2">
      <li>Yêu thích Tailwind v4 và tư duy utility-first.</li>
      <li>Quan tâm đến DX: cấu trúc dự án rõ ràng, tài liệu tốt.</li>
      <li>Thích chia sẻ kiến thức qua các demo nhỏ và blog.</li>
    </ul>
  </section>`}async function r(){return`
  <section class="container mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold mb-6">Dự án</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${(await(await fetch("/src/data/projects.json")).json()).map(e=>`
        <article class="bg-white shadow p-4 rounded">
          <h4 class="font-bold">${e.title}</h4>
          <p class="text-gray-600">${e.desc}</p>
          ${e.link?`<a href="${e.link}" target="_blank" rel="noopener noreferrer"
                   class="inline-block mt-2 text-blue-600 underline text-sm">Xem chi tiết</a>`:""}
          ${e.tags&&e.tags.length?`<p class="text-xs text-gray-500 mt-1">#${e.tags.join(" #")}</p>`:""}
        </article>`).join("")}
    </div>
  </section>`}function d(){return`
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-4">Liên hệ</h2>
      <p class="mb-2">Bạn có thể email cho tôi tại:</p>
      <p>
        <a class="text-blue-600 underline" href="mailto:trung.dinhquang@hotmail.com">
          trung.dinhquang@hotmail.com
        </a>
      </p>
    </div>
  </section>`}function h(){return(location.hash||"#/").slice(1)||"/"}function u(o){document.querySelectorAll(".navlink").forEach(n=>{const e=n.getAttribute("href").slice(1)===o;n.classList.toggle("text-blue-600",e),n.classList.toggle("font-semibold",e),n.classList.toggle("underline",e)})}function g(){const o=document.getElementById("app-main");async function n(){const e=h();u(e);const t={"/":l,"/about":a,"/projects":r,"/contact":d}[e];if(!t){o.innerHTML=`
        <section class="container mx-auto py-16 px-4">
          <h2 class="text-2xl font-semibold mb-2">404</h2>
          <p class="text-gray-600">Trang bạn tìm không tồn tại.</p>
          <a class="text-blue-600 underline" href="#/">Quay về trang chủ</a>
        </section>`,window.scrollTo({top:0,behavior:"instant"});return}o.innerHTML=await t(),window.scrollTo({top:0,behavior:"instant"})}window.addEventListener("hashchange",n),location.hash||(location.hash="#/"),n()}document.addEventListener("DOMContentLoaded",()=>{console.log("Portfolio loaded!");const o=document.createElement("button");o.textContent="🌙 Dark Mode",o.className="fixed bottom-4 right-4 px-3 py-2 rounded bg-gray-800 text-white",document.body.appendChild(o),o.onclick=()=>{document.documentElement.classList.toggle("dark")},g()});
