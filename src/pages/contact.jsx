import React from "react";

export function Contact() {
  return (
    <section className="bg-gray-50 py-24" id="contact">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Tiêu đề với điểm nhấn màu Vàng SHL */}
        <h2 className="relative mb-6 inline-block text-4xl font-bold text-[#003366]">
          Liên hệ
          <span className="absolute bottom-0 left-0 h-1 w-full bg-[#FCEA1D]"></span>
        </h2>

        <p className="mx-auto mb-10 max-w-lg text-lg text-gray-600">
          Bạn đang tìm kiếm giải pháp phát triển giao diện web cho các sản phẩm
          Oils hay dự án công nghiệp? Hãy kết nối với tôi.
        </p>

        {/* Card thông tin liên hệ */}
        <div className="inline-block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <p className="mb-4 text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Gửi thư trực tiếp tại
          </p>

          <a
            href="mailto:trung.dinhquang@hotmail.com"
            className="group flex items-center justify-center space-x-3 text-2xl font-bold text-[#5FB446] transition-colors hover:text-[#003366] md:text-3xl"
          >
            {/* Icon thư (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 transition-transform group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="underline decoration-[#FCEA1D] decoration-4 underline-offset-8">
              trung.dinhquang@hotmail.com
            </span>
          </a>
        </div>

        {/* Nút hỗ trợ nhanh */}
        <div className="mt-12">
          <p className="text-sm text-gray-400">
            Phản hồi nhanh trong vòng 24 giờ làm việc.
          </p>
        </div>
      </div>
    </section>
  );
}
