import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dự án của tôi | Portfolio",
  description:
    "Danh sách các dự án tiêu biểu bao gồm Blog cá nhân, hệ thống Shop và các giải pháp công nghệ hiện đại.",
};

// Dữ liệu mẫu cho các dự án của bạn
const projects = [
  {
    id: 1,
    title: "Hệ thống Shop Thời Trang",
    description:
      "Nền tảng thương mại điện tử tích hợp thanh toán trực tuyến và quản lý kho hàng hiện đại.",
    tags: ["Next.js 16", "Tailwind v4", "React 19"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Blog Cá Nhân Công Nghệ",
    description:
      "Trang chia sẻ kiến thức lập trình với tối ưu SEO tuyệt đối và điểm hiệu năng Google Lighthouse 100/100.",
    tags: ["Markdown", "Next.js", "PostCSS"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Hệ Thống Quản Lý Catalyst",
    description:
      "Giao diện quản trị (Dashboard) sử dụng bộ UI Catalyst giúp tối ưu hóa quy trình làm việc doanh nghiệp.",
    tags: ["Catalyst UI", "Headless UI", "Chart.js"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Tiêu đề trang dùng font Satoshi */}
      <div className="mb-16 text-center">
        <h1 className="font-display text-4xl font-black tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Dự án tiêu biểu
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Những sản phẩm tâm huyết tôi đã thực hiện trong suốt quá trình làm
          việc.
        </p>
      </div>

      {/* Danh sách Project Grid */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col items-start"
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset" />
            </div>

            <div className="mt-6 flex items-center gap-x-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-avocado-500 text-xs font-medium tracking-widest uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="group-hover:text-avocado-500 mt-3 text-2xl leading-6 font-bold text-gray-900 transition-colors dark:text-white">
              <Link href={project.link}>
                <span className="absolute inset-0" />
                {project.title}
              </Link>
            </h3>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            <div className="mt-6 flex items-center gap-x-2 text-sm font-semibold text-gray-900 dark:text-white">
              Xem chi tiết <span aria-hidden="true">&rarr;</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
