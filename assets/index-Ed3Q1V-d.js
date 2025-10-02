(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();function c(){return`
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
      <p class="text-gray-700 leading-relaxed">
        Tôi đã thực hiện một số dự án cá nhân như 
        <span class="font-semibold">Portfolio Website</span> để giới thiệu bản thân, 
        <span class="font-semibold">Todo App</span> để quản lý công việc hằng ngày, 
        và <span class="font-semibold">Blog cá nhân</span> dùng để viết bài và chia sẻ kiến thức.
      </p>
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
  </section>`}const r=[{title:"TailwindCSS Docs",desc:"Trang tài liệu học Tailwind CSS (tiếng Việt).",link:"https://tailwindcss.trung87.link/",tags:["tailwind","docs","learning"]},{title:"TailwindCSS Playground",desc:"Playground để thử nghiệm Tailwind CSS trực tiếp.",link:"https://play-tailwindcss.trung87.link/",tags:["tailwind","playground","demo"]},{title:"Tailwind UI v4 Explorer",desc:"Kho duyệt component Tailwind UI v4.",link:"https://tailwinduiv4.trung87.link/",tags:["tailwind","components","explorer"]},{title:"Blog Trung87",desc:"Blog cá nhân chạy Sanity + Next.js.",link:"https://blog.trung87.link/",tags:["blog","sanity","nextjs"]}];async function d(){return`
  <section class="container mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold mb-6">Dự án</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${r.map(t=>`
        <article class="bg-white shadow p-4 rounded">
          <h4 class="font-bold">${t.title}</h4>
          <p class="text-gray-600">${t.desc}</p>
          ${t.link?`<a href="${t.link}" target="_blank" rel="noopener noreferrer"
                   class="inline-block mt-2 text-blue-600 underline text-sm">Xem chi tiết</a>`:""}
          ${t.tags&&t.tags.length?`<p class="text-xs text-gray-500 mt-1">#${t.tags.join(" #")}</p>`:""}
        </article>`).join("")}
    </div>
  </section>`}function u(){return`
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
  </section>`}function h(){return(location.hash||"#/").slice(1)||"/"}function g(t){document.querySelectorAll(".navlink").forEach(e=>{const o=e.getAttribute("href").slice(1)===t;e.classList.toggle("text-blue-600",o),e.classList.toggle("font-semibold",o),e.classList.toggle("underline",o)})}function p(){const t=document.getElementById("app-main");async function e(){const o=h();g(o);const n={"/":c,"/about":a,"/projects":d,"/contact":u}[o];if(!n){t.innerHTML=`
        <section class="container mx-auto py-16 px-4">
          <h2 class="text-2xl font-semibold mb-2">404</h2>
          <p class="text-gray-600">Trang bạn tìm không tồn tại.</p>
          <a class="text-blue-600 underline" href="#/">Quay về trang chủ</a>
        </section>`,window.scrollTo({top:0,behavior:"instant"});return}t.innerHTML=await n(),window.scrollTo({top:0,behavior:"instant"})}window.addEventListener("hashchange",e),location.hash||(location.hash="#/"),e()}document.addEventListener("DOMContentLoaded",()=>{console.log("Portfolio loaded!");const t=document.createElement("button");t.textContent="🌙 Dark Mode",t.className="fixed bottom-4 right-4 px-3 py-2 rounded bg-gray-800 text-white",document.body.appendChild(t),t.onclick=()=>{document.documentElement.classList.toggle("dark")},p()});
