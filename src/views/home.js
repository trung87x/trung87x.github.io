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
  `;
}
