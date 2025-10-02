export function HomeView() {
  return `
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
  `;
}
