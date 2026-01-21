import { PlusIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <>
      <h2>Primary</h2>
      <section>
        <h3>1. Nút bấm chính (Filled Button)</h3>
        <p>
          Màu primary làm nền và màu on-primary đảm bảo chữ luôn hiển thị rõ
          nhất.
        </p>
        <button class="bg-primary text-on-primary rounded-full px-6 py-2.5 font-medium shadow-md transition-all hover:shadow-lg">
          Gửi tin nhắn
        </button>

        <h3>2. Nút hành động nổi bật vừa phải (Tonal Button / FAB)</h3>
        <p>
          Các nút nhấn ít quan trọng hơn nút chính nhưng vẫn cần nổi bật sẽ dùng
          bộ container.
        </p>
        <button class="bg-primary-container text-on-primary-container flex items-center gap-2 rounded-2xl p-4 hover:brightness-95">
          <PlusIcon class="h-5 w-5" stroke-width="2" />
          <span class="font-medium">Thêm liên hệ</span>
        </button>

        <h3>3. Trạng thái lựa chọn (Selection State)</h3>
        <p>
          Dùng màu Primary để làm nổi bật phần tử đang được chọn trong danh sách
          hoặc menu điều hướng.
        </p>
        <div class="bg-surface flex w-64 flex-col gap-1 p-2">
          <div class="bg-surface flex w-64 flex-col gap-1 p-2">
            <div class="bg-primary-container text-on-primary-container flex cursor-pointer items-center gap-3 rounded-full px-4 py-3">
              <span class="font-semibold">Hộp thư đến</span>
              <span class="bg-primary text-on-primary ml-auto rounded-full px-2 py-0.5 text-xs">
                24
              </span>
            </div>
            <div class="text-on-surface-variant hover:bg-surface-container flex cursor-pointer items-center gap-3 rounded-full px-4 py-3 transition-colors">
              <span>Thư đã gửi</span>
            </div>
          </div>
        </div>

        <h3>4. Ô nhập liệu khi được chọn (Input Focus)</h3>
        <p>
          Sử dụng primary làm màu viền để báo hiệu người dùng đang thao tác tại
          ô này.
        </p>
        <div class="flex w-full max-w-sm flex-col gap-2">
          <label class="text-primary ml-1 text-sm font-medium">
            Tên người dùng
          </label>
          <input
            type="text"
            class="bg-surface border-outline focus:ring-primary placeholder:text-outline-variant rounded-xl border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
            placeholder="Nhập tên..."
          />
        </div>

        <h3>5. Thành phần cố định (Primary Fixed)</h3>
        <p>
          Dùng cho các thành phần bạn muốn giữ nguyên tông màu này kể cả khi
          người dùng chuyển sang Dark Mode (ví dụ: các nhãn quảng cáo hoặc
          banner đặc biệt).
        </p>
        <div class="bg-primary-fixed text-on-primary-fixed border-primary-on-fixed-variant rounded-xl border p-4">
          <h4 class="font-bold">Ưu đãi thành viên</h4>
          <p class="text-sm opacity-90">
            Bạn nhận được giảm giá 20% cho lần mua tới.
          </p>
        </div>
      </section>

      <h2>Secondary</h2>
      <section>
        <h3>1. Chip lọc (Filter Chips)</h3>
        <p>
          Đây là ứng dụng phổ biến nhất của Secondary. Nó giúp phân loại nội
          dung mà không làm xao nhãng khỏi hành động chính.
        </p>
        <div class="flex gap-2">
          <button class="bg-secondary-container text-on-secondary-container flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-all hover:brightness-95">
            <FunnelIcon class="h-4 w-4" />
            Lọc theo giá
          </button>

          <button class="bg-surface border-outline text-on-surface-variant hover:bg-surface-container rounded-lg border px-4 py-1.5 text-sm font-medium transition-all">
            Mới nhất
          </button>
        </div>
        <h3>2. Nút hành động phụ (Outlined / Tonal Button)</h3>
        <p>
          Dùng cho các hành động như "Hủy", "Lưu nháp" hoặc các nút không phải
          là mục tiêu chính của trang.
        </p>
        <h3>3. Badge hoặc Tag thông tin</h3>
        <p>
          Dùng màu Secondary để đánh dấu các thông tin bổ trợ như danh mục sản
          phẩm, trạng thái số lượng.
        </p>
        <h3>4. Icon hỗ trợ trong Danh sách (List Item Icon)</h3>
        <p>
          Sử dụng secondary-container làm nền cho icon để tạo điểm nhấn nhẹ
          nhàng cho danh mục.
        </p>
        <h3>5. Lựa chọn trong bộ chọn (Checkboxes / Radio Active)</h3>
        <p>
          Khi một thành phần nhỏ được chọn, sử dụng Secondary để tạo cảm giác
          nhẹ nhàng hơn Primary.
        </p>
      </section>
    </>
  );
}
