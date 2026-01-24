# Điều quan trọng nhất khi dùng Catalyst: Tư duy "Sở hữu" (Ownership)

Đây là điểm khác biệt lớn nhất của Catalyst so với các thư viện khác (như Bootstrap, Ant Design hay Material UI), và cũng là "cái bẫy" mà nhiều người mới thường gặp.

**"Bạn ĐANG SỞ HỮU mã nguồn (Source Code) của Catalyst, chứ không phải chỉ là người sử dụng."**

## 1. Đừng sợ sửa code gốc

Các file component (như `button.jsx`, `dialog.jsx`) nằm ngay trong thư mục dự án của bạn (`src/components/...` hoặc tương tự).

- **Nên làm:** Mở file code lên và sửa trực tiếp. Ví dụ: Thấy `Dialog` mặc định quá hẹp? Mở `dialog.jsx` sửa `max-w-lg` thành `max-w-2xl`.
- **Tránh làm:** Cố gắng "đè" CSS từ bên ngoài (override) một cách khổ sở như khi dùng thư viện npm đóng kín.

## 2. Cẩn thận với Logic (Headless UI)

Bạn có thể thoải mái sửa giao diện (CSS/Tailwind classes), nhưng hãy **hạn chế sửa phần Logic** (các thẻ từ `@headlessui/react`).

- **Lý do:** Headless UI đã xử lý rất tốt các vấn đề về khả năng truy cập (accessibility) và tương tác bàn phím (keyboard navigation).
- **Rủi ro:** Nếu sửa sai logic, trang web có thể sẽ khó dùng trên điện thoại hoặc với người khiếm thị.

## 3. Thống nhất Design System trước tiên

Trước khi bắt tay vào làm trang Shop, hãy bỏ ra 30 phút để định nghĩa lại bộ màu (colors) và phông chữ (fonts) trong `tailwind.config.js`. Catalyst sẽ tự động ăn theo các cài đặt này.

- **Lợi ích:** Làm việc này trước thì sau này không phải đi sửa màu thủ công từng nút bấm hay từng ô nhập liệu.

**Tóm lại:**
Hãy coi Catalyst là "khung nhà thô" mà bạn đã mua đứt. Bạn có toàn quyền đập đi xây lại cái cửa sổ hay sơn lại tường, nhưng đừng đập vào các "cột trụ chịu lực" (Headless UI) nếu không nắm chắc kỹ thuật.
