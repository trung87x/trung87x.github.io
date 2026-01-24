# Catalyst vs Tailwind Templates

Tài liệu này giải thích sự khác biệt và mối quan hệ giữa `ui/catalyst` và các mẫu giao diện trong `features/tailwindcss`.

## 1. `ui/catalyst` (Bộ linh kiện - Foundation)

Đây là **Catalyst**, một bộ UI Kit chính chủ từ đội ngũ Tailwind.

- **Bản chất:** Nó cung cấp các **"nguyên liệu"** đã được đóng gói sẵn thành React Components hoàn chỉnh.
  - Ví dụ: Thay vì viết một nút bấm với nhiều class như `className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded..."`, bạn chỉ cần gọi `<Button>Mua ngay</Button>`.
- **Tác dụng:** Giúp code GỌN GÀNG và ĐỒNG BỘ. Việc chỉnh sửa giao diện toàn hệ thống trở nên dễ dàng hơn bằng cách sửa component gốc.
- **Khi nào dùng:** Dùng cho **mọi nơi** trong dự án để xây dựng giao diện chi tiết.

## 2. `features/tailwindcss` (Bản thiết kế mẫu - Patterns/Templates)

Thư mục này chứa các bộ sưu tập **mẫu giao diện** (thường thấy từ Tailwind UI) như `ecommerce`, `marketing`, `application-ui`.

- **Bản chất:** Đây là các đoạn code HTML/JSX dài dùng để dựng lên **cấu trúc của một trang hoặc một khối lớn**.
  - Ví dụ: Một trang "Chi tiết sản phẩm" (Product Detail), "Thanh điều hướng" (Navbar), hay "Giỏ hàng" (Shopping Cart).
- **Tác dụng:** Giúp KHÔNG PHẢI NGHĨ về việc bố trí (layout) trang web.
- **Khi nào dùng:** Dùng để **tham khảo** hoặc **copy cấu trúc** khi bắt đầu làm trang mới.

## Cách kết hợp (Ví dụ: Phát triển trang Shop)

Hai thành phần này **không phải là 2 bước đi lần lượt**, mà là **2 cấp độ công cụ** bổ trợ cho nhau.

1.  **Bước 1 (Tham khảo):** Xem mẫu trong `features/tailwindcss/ecommerce` để lấy ý tưởng về bố cục (chia cột, vị trí ảnh, nút bấm...).
2.  **Bước 2 (Thực hiện với Catalyst):** Xây dựng trang Shop thực tế.
    - Sử dụng cấu trúc bố cục (layout) tham khảo từ Bước 1.
    - Thay thế các phần tử HTML dài dòng bằng các component gọn gàng từ `ui/catalyst` (ví dụ: dùng `<Button>`, `<Select>`, `<TextField>` của Catalyst).

**Tóm lại:**

- **`tailwindcss` (Templates):** Cung cấp ý tưởng về **BỐ CỤC**.
- **`catalyst` (Components):** Cung cấp công cụ để **XÂY DỰNG** bố cục đó nhanh và chuẩn.
