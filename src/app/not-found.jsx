import Link from "next/link";

export const metadata = {
  title: "404 - Không tìm thấy trang",
  description:
    "Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      {/* Hiển thị con số 404 nổi bật */}
      <h1 className="font-display text-avocado-500 text-9xl font-black opacity-20">
        404
      </h1>

      <div className="absolute space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Trang không tồn tại
        </h2>

        <p className="mx-auto max-w-lg text-lg text-gray-600 dark:text-gray-400">
          Có vẻ như đường dẫn này đã bị hỏng hoặc trang web đã được chuyển sang
          một địa chỉ mới. Đừng lo lắng, bạn có thể quay lại trang chủ bên dưới.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Quay về trang chủ
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-gray-900 hover:underline dark:text-white"
          >
            Liên hệ hỗ trợ <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
