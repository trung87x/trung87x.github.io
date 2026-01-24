# Ý tưởng: Semantic Design Token (Material Design Style)

_Ghi chú: Đây là ghi lại ý tưởng tuyệt vời từ trải nghiệm thực tế của bạn về việc định nghĩa Design System._

## Vấn đề

Khi dùng các class tiện ích (utility classes) thuần túy của Tailwind (như `bg-gray-100`, `rounded-lg`), chúng ta dễ gặp tình trạng "giá trị vô hồn":

- Khó nhớ: "Màu nền phụ là xám 100 hay 200?"
- Khó quản lý: Khi muốn đổi toàn bộ nút bo tròn từ `8px` lên `12px`, phải đi tìm và sửa hàng trăm chỗ.

## Giải pháp: Semantic Design (Tư duy Material V3)

Thay vì định nghĩa **Giá trị** (Value), hãy định nghĩa **Ngữ nghĩa** (Meaning).
Sử dụng các tên biến (tokens) mang tính mô tả chức năng, lấy cảm hứng từ Material Design 3.

### Ví dụ

Trong `src/ui/shape.css` (hoặc `theme.css`), thay vì chỉ nhớ số pixel, ta định nghĩa:

```css
@theme {
  /* Định nghĩa các biến Radius chuẩn M3 */
  --radius-shape-small: 8px; /* Thay vì nhớ 8px */
  --radius-shape-medium: 12px; /* Thay vì nhớ 12px */
}

/* Bo góc đều 4 cạnh */
@utility shape-small {
  border-radius: var(--radius-shape-small);
}
```

### Tại sao cách này hay?

1.  **Ngữ nghĩa (Semantic) > Giá trị (Value):** Bạn chỉ cần nhớ `surface-container-high` (Nền chứa nội dung cao) thay vì `bg-gray-50`. Nó trả lời câu hỏi "Dùng để làm gì?" thay vì "Nó màu gì?".
2.  **Thu hẹp lựa chọn:** Thay vì bơi trong "biển" giá trị của Tailwind (từ `p-0.5` đến `p-96`), bạn tự giới hạn lại trong một bộ quy tắc chuẩn (Design System). Điều này giúp thiết kế của bạn nhất quán (consistent) và chuyên nghiệp hơn.
3.  **Dễ bảo trì:** Sửa một biến `--radius-shape-small` ở file gốc, toàn bộ dự án tự cập nhật.

=> Đây là tư duy của người làm **Product (Sản phẩm)** thay vì chỉ là **Coder (Thợ code)**.
