const i=[{title:"TailwindCSS Docs",desc:"Trang tài liệu học Tailwind CSS (tiếng Việt).",link:"https://tailwindcss.trung87.link/",tags:["tailwind","docs","learning"]},{title:"TailwindCSS Playground",desc:"Playground để thử nghiệm Tailwind CSS trực tiếp.",link:"https://play-tailwindcss.trung87.link/",tags:["tailwind","playground","demo"]},{title:"Tailwind UI v4 Explorer",desc:"Kho duyệt component Tailwind UI v4.",link:"https://tailwinduiv4.trung87.link/",tags:["tailwind","components","explorer"]},{title:"Blog Trung87",desc:"Blog cá nhân chạy Sanity + Next.js.",link:"https://blog.trung87.link/",tags:["blog","sanity","nextjs"]}];async function n(){return`
  <section class="container mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold mb-6">Dự án</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${i.map(t=>`
        <article class="bg-white shadow p-4 rounded">
          <h4 class="font-bold">${t.title}</h4>
          <p class="text-gray-600">${t.desc}</p>
          ${t.link?`<a href="${t.link}" target="_blank" rel="noopener noreferrer"
                   class="inline-block mt-2 text-blue-600 underline text-sm">Xem chi tiết</a>`:""}
          ${t.tags&&t.tags.length?`<p class="text-xs text-gray-500 mt-1">#${t.tags.join(" #")}</p>`:""}
        </article>`).join("")}
    </div>
  </section>`}export{n as Projects};
