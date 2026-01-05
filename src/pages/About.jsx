import React from "react";

export default function About() {
  return (
    <section className="container mx-auto bg-white px-4 py-16">
      {/* Tiêu đề với màu xanh SHL thực tế */}
      <h2 className="mb-6 border-l-4 border-[#FCEA1D] pl-4 text-3xl font-bold text-[#5FB446]">
        Giới thiệu
      </h2>

      <p className="text-lg leading-relaxed text-gray-700">
        Tôi là{" "}
        <span className="font-semibold text-[#003366]">
          Trung — Frontend Developer
        </span>
        . Tôi tập trung vào HTML, CSS, JS, Tailwind và xây dựng những UI gọn
        sạch, hiệu năng tốt cho các dự án công nghiệp và đời sống.
      </p>

      {/* Danh sách với các icon bullet màu vàng SHL */}
      <ul className="mt-6 space-y-3">
        <li className="flex items-start">
          <span className="mr-2 text-[#FCEA1D]">✔</span>
          <span className="text-gray-700">
            Yêu thích <strong>Tailwind v4</strong> và tư duy utility-first.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-[#FCEA1D]">✔</span>
          <span className="text-gray-700">
            Quan tâm đến DX: cấu trúc dự án rõ ràng, tài liệu tốt.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-[#FCEA1D]">✔</span>
          <span className="text-gray-700">
            Thích chia sẻ kiến thức qua các demo nhỏ và blog.
          </span>
        </li>
      </ul>
    </section>
  );
}
