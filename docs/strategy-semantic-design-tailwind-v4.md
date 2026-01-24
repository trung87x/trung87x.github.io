# Chiến lược: Semantic Design với Tailwind v4

Tài liệu này hướng dẫn cách kết hợp tư duy "Semantic Design" (Định nghĩa theo ý nghĩa) của Material Design với sức mạnh kỹ thuật của Tailwind CSS v4.

## 1. Triết lý

**"Design Tokens as the Single Source of Truth"**
Biến (Variables/Tokens) là nguồn chân lý duy nhất. Tailwind chỉ là công cụ để phân phối biến đó ra giao diện.

## 2. Kỹ thuật triển khai (Tailwind v4)

Chúng ta sử dụng 2 tính năng mới nhất của Tailwind v4: `@theme` và `@utility`.

### Bước 1: Định nghĩa "Nguyên liệu" (Tokens)

Tạo file CSS riêng (ví dụ `src/ui/tokens.css` hoặc chia nhỏ như bạn đang làm: `shape.css`, `colors.css`).

```css
@theme {
  /* COLORS: Đặt tên theo chức năng (Semantic) */
  --color-surface-base: var(--color-gray-50);
  --color-surface-elevated: var(--color-white);
  --color-action-primary: var(--color-blue-600);

  /* SHAPES: Đặt tên theo kích thước chuẩn */
  --radius-dialog-surface: 28px; /* Material 3 Dialog specs */
  --radius-card-surface: 12px;
}
```

### Bước 2: "Map" (Ánh xạ) vào Tailwind

Có 2 cách để dùng các token này trong dự án Catalyst/React.

#### Cách A: Soft Sync (Khuyên dùng - Đơn giản nhất)

Bạn ép Tailwind dùng biến của bạn làm giá trị mặc định.
Trong file CSS chính:

```css
@theme {
  /* Ghi đè giá trị mặc định của Tailwind bằng Token của bạn */
  --radius-xl: var(--radius-card-surface);
  --radius-3xl: var(--radius-dialog-surface);
}
```

**Lợi ích:** Khi dùng `<div className="rounded-xl">` (code cũ hoặc Catalyst component), nó sẽ **tự động** ra `12px` (giá trị của `--radius-card-surface`) thay vì giá trị mặc định. Bạn không cần sửa code React.

#### Cách B: Hard Sync (Tạo Utility mới)

Bạn tạo ra class mới hoàn toàn (như bạn đã làm trong `shape.css`).

```css
@utility shape-card {
  border-radius: var(--radius-card-surface);
}
```

**Lợi ích:** Tên class rõ nghĩa tuyệt đối (`shape-card` dễ hiểu hơn `rounded-xl`).
**Nhược điểm:** Bạn phải vào các file Component (như `Card.jsx`) để sửa `className="rounded-xl"` thành `className="shape-card"`.

## 3. Quy trình làm việc (Workflow) khi có thành viên mới

1.  **Đọc Tokens:** Mở folder `src/ui/*.css` để hiểu "từ điển" của dự án (Màu nào dùng cho việc gì?).
2.  **Sử dụng:**
    - Ưu tiên dùng các class Semantic (nếu đã theo Cách B): `bg-surface-base`, `text-on-surface`.
    - Hạn chế dùng "magic numbers" (số tùy ý): Tránh `w-[325px]`, hãy định nghĩa token nếu kích thước đó quan trọng.

## Kết luận

Logic thiết kế của bạn rất gần với cách các hệ thống lớn vận hành. Việc kết hợp này giúp dự án vừa có **Tốc độ** (của Tailwind) vừa có **Chiều sâu & Sự nhất quán** (của Material Design).
