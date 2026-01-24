# Chiến lược Áp dụng: Lõi Ngữ nghĩa - Vỏ Linh hoạt (Semantic Core - Flexible Shell)

Để đạt sự chuyên nghiệp và nhất quán cao nhất, hãy áp dụng quy tắc **"Trong - Ngoài khác biệt"**.

## 1. Trong lõi Catalyst (`src/ui/catalyst/*.jsx`): Dùng Class & Biến Material

Đây là nơi định nghĩa Design System ("Nhà máy sản xuất linh kiện"). Bạn cần tuân thủ tuyệt đối bản vẽ thiết kế (Material Theme).

- **Nguyên tắc:** Thay thế các class Tailwind chung chung bằng class Material của bạn.
- **Hành động:**
  - **Class:** Thay `rounded-lg` bằng `shape-small` (như trong `shape.css`).
  - **Biến (Tokens):** Với các giá trị phức tạp (ví dụ trong `calc`), hãy dùng biến CSS.
    - _Ví dụ (Button.jsx):_
      - Cũ: `before:rounded-[calc(var(--radius-lg)-1px)]`
      - Mới: `before:rounded-[calc(var(--radius-shape-small)-1px)]`

**Lợi ích:** Khi bạn sửa độ bo góc trong `shape.css`, toàn bộ nút bấm trong dự án sẽ tự động cập nhật theo.

## 2. Ngoài trang Shop (`src/app/.../page.jsx`): Dùng Component & Tailwind Layout

Đây là nơi lắp ráp giao diện ("Công trường xây dựng"). Người code trang không nên quan tâm nút bo bao nhiêu pixel.

- **Nguyên tắc:** Chỉ gọi Component và dùng Tailwind để bố cục.
- **Hành động:**
  - Sử dụng: `<Button>Mua ngay</Button>`
  - Bố cục: Dùng `flex`, `grid`, `mt-4`, `w-full`... để căn chỉnh vị trí.
  - **Tránh:** Hạn chế tối đa việc ghi đè style kiểu `<Button className="rounded-full">` trừ khi cực chẳng đã.

## Tóm tắt:

- **Code lõi (Catalyst):** Dùng Material Class/Var (để chuẩn Design System).
- **Code trang (App):** Dùng Tailwind Utility (để nhanh & linh hoạt bố cục).
