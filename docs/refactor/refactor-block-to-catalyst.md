## Refactor-b1: Tối ưu hóa trang `/page-examples` theo chuẩn Catalyst Design System

Tôi đã hoàn thành việc refactor lại trang **`/page-examples`**, chuyển đổi hoàn toàn sang sử dụng các component của **Catalyst** và **Tailwind CSS** theo đúng các nguyên tắc hệ thống:

### 1. Sử dụng Components chuẩn:

- **Heading & Subheading:** Thay thế hoàn toàn cho các thẻ `h1`, `h2` để đảm bảo tính phân cấp hệ thống.
- **Text:** Sử dụng thay cho thẻ `p` để đồng bộ về typography.
- **Divider:** Tận dụng để tạo các đường phân cách vùng dữ liệu một cách tinh tế.
- **Button (dạng plain):** Áp dụng cho các liên kết ví dụ. Tôi đã cập nhật lại logic của component **Link** trong Catalyst để đảm bảo tương thích hoàn hảo với Next.js (hỗ trợ SPA navigation mượt mà).

### 2. Layout bằng Tailwind CSS:

- **Cấu trúc:** Sử dụng `grid`, `flex` và `gap` để xây dựng bố cục linh hoạt và nhất quán.
- **Căn chỉnh:** Dùng `w-full` và `justify-between` để tối ưu hóa vị trí các nút bấm và thành phần tương tác.
- **Nguyên tắc hệ thống:** Tuyệt đối không ghi đè sai lệch Design System, chỉ tập trung tùy biến layout bên ngoài (custom layout).

**Kết quả:** Trang `/page-examples` hiện tại đã có giao diện **Clean** hơn, chuyên nghiệp và tuân thủ hoàn toàn bộ nhận diện thiết kế của Catalyst. Bạn có thể kiểm tra trực tiếp để thấy sự khác biệt.

---

**Tôi có thể giúp bạn viết thêm phần mô tả kỹ thuật cho file `Link` đã cập nhật không?**
