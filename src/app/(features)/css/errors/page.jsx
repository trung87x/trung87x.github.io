"use client";

export default function Example() {
  return (
    <>
      <p className="bad">This is a paragraph.</p>

      <style jsx>{`
        .bad {
          color: #d32f2f; /* Màu đỏ đậm hơn một chút cho dễ đọc */
          outline: 2px solid #ffcdd2; /* Viền đỏ nhạt hoặc dày hơn để phân biệt */
          outline-offset: 2px; /* Đẩy viền ra xa chữ một chút */
          padding: 2px 5px; /* Tạo khoảng trống bên trong */
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
