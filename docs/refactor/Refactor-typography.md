# Refactor-b3: Chuẩn hóa hệ thống Typography theo Material Design 3

Tôi đã hoàn thành việc tái cấu trúc hệ thống chữ viết trên trang web, chuyển từ các class tùy biến rời rạc sang hệ thống **Typography Tokens** chuẩn. Việc này giúp đảm bảo tính nhất quán tuyệt đối về nhịp điệu thị giác (Visual Rhythm).

### 1. Hệ thống Mapping Utility Classes

Toàn bộ các thẻ văn bản đã được ánh xạ lại theo đúng vai trò của chúng trong bản vẽ thiết kế:

| Thành phần           | Class cũ (Tailwind)       | Class mới (M3 Roles) |
| :------------------- | :------------------------ | :------------------- |
| **Tiêu đề chính**    | `text-5xl font-extrabold` | `display-large`      |
| **Tiêu đề phụ**      | `text-2xl font-bold`      | `headline-small`     |
| **Tiêu đề mục**      | `text-lg font-semibold`   | `title-medium`       |
| **Nội dung văn bản** | `text-base`               | `body-large`         |
| **Nhãn (Pill/Tag)**  | `text-sm font-medium`     | `label-large`        |

### 2. Lợi ích của việc Refactor Typography

- **Chính xác về thông số:** Các class mới đã bao gồm sẵn `line-height` (độ giãn dòng) và `letter-spacing` (khoảng cách chữ) chuẩn, giúp người dùng đọc nội dung dễ dàng hơn, không bị dính chữ.
- **Dễ dàng bảo trì:** Nếu sau này cần thay đổi font chữ toàn bộ dự án, chúng ta chỉ cần cập nhật tại file `typography.css`, toàn bộ trang web sẽ tự động cập nhật theo mà không cần sửa từng file JSX.
- **Đồng bộ với Color Roles:** Giờ đây, trang web đã đạt được sự đồng bộ hoàn hảo: **Color Role** (Màu sắc theo vai trò) đi kèm với **Typography Role** (Chữ viết theo vai trò).

### 3. Trạng thái hiện tại

Code hiện tại đã hoàn toàn sạch sẽ, tuân thủ 100% Design Tokens. Giao diện trang `/page-examples` đã hiển thị đúng "vibe" chuyên nghiệp của các sản phẩm Google hiện đại.
