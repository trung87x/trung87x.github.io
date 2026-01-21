import {
  PlusIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  FunnelIcon,
  TagIcon,
  UserGroupIcon,
  TruckIcon,
  BellIcon,
  CalendarDaysIcon,
  HeartIcon,
  ExclamationCircleIcon,
  TrashIcon,
  WifiIcon,
  NoSymbolIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  DocumentTextIcon as DocumentTextSolid,
} from "@heroicons/react/24/solid";
import { GiftIcon } from "@heroicons/react/24/solid";

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
        <div class="flex gap-3">
          <button class="bg-secondary-container text-on-secondary-container rounded-full px-6 py-2 font-medium transition-all hover:brightness-95 active:scale-95">
            Hủy bỏ
          </button>

          <button class="bg-primary text-on-primary rounded-full px-6 py-2 font-medium transition-all hover:shadow-md active:scale-95">
            Lưu thay đổi
          </button>
        </div>

        <h3>3. Badge hoặc Tag thông tin</h3>
        <p>
          Dùng màu Secondary để đánh dấu các thông tin bổ trợ như danh mục sản
          phẩm, trạng thái số lượng.
        </p>
        <div class="flex items-center gap-2">
          <TagIcon class="text-secondary h-5 w-5" />
          <span class="bg-secondary-container text-on-secondary-container rounded px-2 py-0.5 text-xs font-bold tracking-wider uppercase">
            Điện tử
          </span>
        </div>

        <h3>4. Icon hỗ trợ trong Danh sách (List Item Icon)</h3>
        <p>
          Sử dụng secondary-container làm nền cho icon để tạo điểm nhấn nhẹ
          nhàng cho danh mục.
        </p>
        <div class="bg-surface hover:bg-surface-container-low flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors">
          <div class="bg-secondary-container text-on-secondary-container rounded-xl p-3">
            <UserGroupIcon class="h-6 w-6" />
          </div>
          <div>
            <p class="text-on-surface font-bold">Cộng đồng</p>
            <p class="text-on-surface-variant text-sm">
              2.4k thành viên mới hôm nay
            </p>
          </div>
        </div>

        <h3>5. Lựa chọn trong bộ chọn (Checkboxes / Radio Active)</h3>
        <p>
          Khi một thành phần nhỏ được chọn, sử dụng Secondary để tạo cảm giác
          nhẹ nhàng hơn Primary.
        </p>
        <div class="border-outline-variant bg-surface hover:border-secondary flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors">
          <div class="border-secondary flex h-5 w-5 items-center justify-center rounded-full border-2">
            <div class="bg-secondary h-2.5 w-2.5 rounded-full"></div>
          </div>

          <span class="text-on-surface font-medium">
            Thanh toán khi nhận hàng
          </span>

          <TruckIcon class="text-secondary ml-auto h-5 w-5" />
        </div>
      </section>
      <h2>Tertiary</h2>
      <section>
        <h3>1. Thông báo hoặc Badge gây chú ý (Input Badges)</h3>
        <p>
          Tertiary rất tốt để làm các thẻ thông báo nhỏ mà không bị lẫn vào màu
          nút bấm chính (Primary).
        </p>
        <div class="relative inline-block">
          <BellIcon class="text-on-surface-variant h-8 w-8" />
          <span class="bg-tertiary text-on-tertiary border-surface absolute -top-1 -right-1 rounded-full border-2 px-1.5 py-0.5 text-[10px] font-bold">
            9+
          </span>
        </div>
        <h3>2. Thành phần Input chọn ngày (Date Picker / Time)</h3>
        <p>
          Sử dụng tertiary-container để đánh dấu các yếu tố đặc biệt hoặc lựa
          chọn khác biệt trong một form.
        </p>

        <div class="bg-tertiary-container text-on-tertiary-container flex items-center justify-between rounded-2xl p-4 shadow-sm">
          <div class="flex items-center gap-3">
            <CalendarDaysIcon class="h-6 w-6" />
            <span class="font-medium">Hẹn lịch vào ngày mai</span>
          </div>
          <button class="bg-tertiary text-on-tertiary rounded-full px-3 py-1 text-sm font-bold transition-all hover:brightness-110 active:scale-95">
            Thay đổi
          </button>
        </div>
        <h3>3. Đánh dấu nội dung đặc biệt (Highlighting)</h3>
        <p>
          Dùng để nhấn mạnh một từ hoặc đoạn mã trong khối văn bản mà bạn không
          muốn dùng màu Primary quá "gắt".
        </p>
        <div class="bg-surface-container border-tertiary rounded-xl border-l-4 p-4">
          <p class="text-on-surface">
            Mẹo nhỏ: Bạn có thể nhấn
            <span class="bg-tertiary-container text-on-tertiary-container mx-1 rounded px-1.5 py-0.5 font-mono font-bold">
              Ctrl + K
            </span>
            để tìm kiếm nhanh mọi thứ.
          </p>
        </div>
        <h3>4. Thành phần trang trí mang tính chức năng (Functional Decor)</h3>
        <p>
          Ví dụ: Nút "Yêu thích" hoặc "Lưu lại" thường dùng Tertiary để tách
          biệt khỏi hành động "Mua ngay" (Primary).
        </p>

        <div class="group bg-surface-container-low relative overflow-hidden rounded-3xl p-4 shadow-sm">
          <img src="https://placehold.co/200x200" class="w-full rounded-2xl" />

          <button class="bg-tertiary-container text-on-tertiary-container absolute top-6 right-6 rounded-full p-2.5 shadow-lg transition-transform hover:scale-110 active:scale-95">
            <HeartIcon class="h-6 w-6" />
          </button>
        </div>
        <h3>5. Biểu đồ hoặc Phân tích (Data Visualization)</h3>
        <p>
          Dùng Tertiary làm màu thứ 3 trong biểu đồ để phân tách các nhóm dữ
          liệu rõ ràng.
        </p>
        <div class="bg-surface space-y-4 rounded-2xl p-4">
          <h4 class="text-on-surface-variant text-sm font-bold tracking-wider uppercase">
            Hiệu suất tháng
          </h4>

          <div class="flex items-center gap-3">
            <div class="bg-surface-container-highest h-3 w-full overflow-hidden rounded-full shadow-inner">
              <div
                class="bg-tertiary h-full w-[65%] rounded-full transition-all duration-500"
                title="65% hoàn thành"
              ></div>
            </div>

            <span class="text-tertiary min-w-[32px] text-sm font-bold">
              65%
            </span>
          </div>
        </div>
      </section>
      <h2>Error</h2>
      <section>
        <h3>1. Thông báo lỗi nhập liệu (Input Validation)</h3>
        <p>
          Sử dụng text-error cho tin nhắn báo lỗi và outline-error để làm nổi
          bật ô nhập liệu bị sai.
        </p>
        <div class="flex w-full max-w-sm flex-col gap-1.5">
          <label class="text-on-surface ml-1 text-sm font-medium">
            Mật khẩu
          </label>
          <input
            type="password"
            class="border-error bg-surface focus:ring-error rounded-xl border-2 px-4 py-3 focus:ring-1 focus:outline-none"
          />
          <div class="text-error ml-1 flex items-center gap-1.5">
            <ExclamationCircleIcon class="h-4 w-4" />
            <span class="text-xs font-medium">
              Mật khẩu phải có ít nhất 8 ký tự.
            </span>
          </div>
        </div>
        <h3>2. Nút hành động nguy hiểm (Destructive Button)</h3>
        <p>
          Dùng bg-error và text-on-error cho các nút bấm có tính chất xóa vĩnh
          viễn hoặc dừng khẩn cấp.
        </p>
        <button class="bg-error text-on-error flex items-center gap-2 rounded-full px-6 py-2.5 font-medium transition-all hover:brightness-90 active:scale-95">
          <TrashIcon class="h-5 w-5" />
          Xóa tài khoản
        </button>
        <h3>3. Banner cảnh báo hoặc Đối thoại lỗi (Error Dialog)</h3>
        <p>
          Sử dụng error-container làm nền để thông báo một sự cố nghiêm trọng mà
          không gây cảm giác quá "gắt" như màu đỏ đặc.
        </p>
        <div class="bg-error-container text-on-error-container border-error/10 flex items-start gap-4 rounded-2xl border p-4 shadow-sm">
          <WifiIcon class="h-6 w-6 shrink-0" />
          <div class="flex flex-col gap-1">
            <p class="font-bold">Mất kết nối internet</p>
            <p class="text-sm opacity-90">
              Vui lòng kiểm tra lại đường truyền để tiếp tục tải dữ liệu.
            </p>
            <button class="mt-2 w-fit text-sm font-bold underline transition-all hover:opacity-80 active:scale-95">
              Thử lại ngay
            </button>
          </div>
        </div>
        <h3>4. Badge trạng thái lỗi (Error Badge)</h3>
        <p>
          Dùng để đánh dấu các mục trong danh sách cần được xử lý ngay lập tức.
        </p>
        <div class="bg-surface-container border-outline-variant flex items-center justify-between rounded-2xl border p-4">
          <div class="flex items-center gap-3">
            <DocumentTextIcon class="h-6 w-6" />
            <span class="font-medium">Hóa đơn #1234</span>
          </div>

          {/* Badge trạng thái - Giữ nguyên dot (chấm tròn) không thay icon */}
          <span class="bg-error-container text-on-error-container flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold">
            <span class="bg-error h-1.5 w-1.5 rounded-full"></span>
            Chưa thanh toán
          </span>
        </div>
        <h3>5. Trạng thái Empty State hoặc Lỗi tải trang</h3>
        <p>
          Kết hợp icon và chữ màu Error để thông báo nội dung không tồn tại hoặc
          bị chặn.
        </p>
        <div class="flex flex-col items-center justify-center py-10 opacity-80">
          <div class="bg-error-container text-on-error mb-4 rounded-full p-6">
            <NoSymbolIcon class="text-error h-12 w-12" />
          </div>
          <h3 class="text-on-surface text-lg font-bold">Truy cập bị từ chối</h3>
          <p class="text-on-surface-variant text-sm">
            Bạn không có quyền xem nội dung này.
          </p>
        </div>
      </section>
      <h2>Surface</h2>
      <section>
        <h3>1. Phân cấp nền chính (Background vs Surface)</h3>
        <p>
          bg-background: Dùng cho lớp nền dưới cùng của toàn bộ ứng dụng.
          bg-surface: Dùng cho các thành phần nằm trên nền, thường là các trang
          giấy hoặc vùng chứa chính.
        </p>
        <body class="bg-background text-on-background min-h-screen">
          <main class="bg-surface border-outline-variant m-4 rounded-3xl border p-6 shadow-sm">
            <h1 class="text-on-surface text-2xl font-bold">Trang chủ</h1>
            <p class="text-on-surface-variant mt-2">
              Nội dung chính được đặt trên lớp Surface.
            </p>
          </main>
        </body>
        <h3>2. Chiều sâu bằng Surface Container (Thay thế Shadow)</h3>
        <p>
          Thay vì dùng shadow-md, bạn hãy dùng các cấp độ màu đậm dần để tạo cảm
          giác các thành phần đang "nổi" lên.
        </p>
        <ul>
          <li>
            lowest: Thường là màu trắng tuyệt đối, dùng cho các thành phần cần
            tách biệt hẳn (như Card trên nền tối).
          </li>
          <li>low / default: Dùng cho thanh điều hướng, menu.</li>
          <li>
            high / highest: Dùng cho các hộp thoại (Dialog) hoặc nút bấm cần sự
            chú ý lớn.
          </li>
        </ul>
        <div class="bg-surface space-y-4 p-6">
          {/* Thanh tìm kiếm */}
          <div class="bg-surface-container-low hover:bg-surface-container flex cursor-text items-center gap-3 rounded-full px-4 py-3 transition-colors">
            <MagnifyingGlassIcon class="text-on-surface-variant h-5 w-5" />
            <span class="text-on-surface-variant">Tìm kiếm...</span>
          </div>

          {/* Container tiêu chuẩn */}
          <div class="bg-surface-container rounded-2xl p-4">
            <p class="text-on-surface">
              Đây là nội dung nằm trong một vùng chứa tiêu chuẩn.
            </p>
          </div>

          {/* Container nổi bật */}
          <div class="bg-surface-container-high border-outline-variant rounded-2xl border p-4 shadow-sm">
            <p class="text-on-surface font-bold">Thông báo hệ thống</p>
            <p class="text-on-surface-variant text-sm">
              Vui lòng cập nhật ứng dụng.
            </p>
          </div>
        </div>
        <h3>3. Biến thể bề mặt (Surface Variant)</h3>
        <p>
          Dùng khi bạn muốn một vùng chứa có màu sắc hơi khác biệt (thường là
          xám hơn/xanh hơn tùy bảng màu) để làm nền cho các thành phần phụ.
        </p>
        <div class="bg-surface-variant text-on-surface-variant border-outline-variant rounded-xl border-l-4 p-4 text-sm italic">
          Ghi chú: Thông tin này được trích xuất tự động từ hệ thống.
        </div>
        <h3>4. Bề mặt đảo ngược (Inverse Surface)</h3>
        <p>
          Dùng cho các thành phần cần sự tương phản cực mạnh với phần còn lại
          của màn hình, ví dụ như Snackbars (thông báo nhỏ ở dưới màn hình).
        </p>
        <div class="bg-inverse-surface text-inverse-on-surface mx-auto flex w-full max-w-sm items-center justify-between rounded-lg px-4 py-3 shadow-lg">
          <span class="text-sm">Đã xóa tin nhắn</span>
          <button class="text-inverse-primary hover:bg-inverse-on-surface/10 rounded px-2 text-sm font-bold uppercase transition-colors active:scale-95">
            Hoàn tác
          </button>
        </div>
        <h3>5. Surface Dim & Bright</h3>
        <p>
          Dùng để kiểm soát độ sáng tối của màn hình một cách tinh tế mà không
          làm thay đổi màu sắc gốc.
        </p>
        <ul>
          <li>
            bg-surface-dim: Làm tối vùng nền (ví dụ khi mở một cửa sổ Popup).
          </li>
          <li>
            bg-surface-bright: Làm sáng vùng nền để tạo điểm nhấn ánh sáng.
          </li>
        </ul>
        <aside class="bg-surface-dim border-outline-variant h-screen w-64 border-r p-4">
          <nav class="space-y-2">
            <div class="bg-surface-bright text-on-surface cursor-pointer rounded-xl p-3 font-medium shadow-sm transition-colors">
              Thư mục hiện tại
            </div>

            <div class="text-on-surface-variant hover:bg-surface-container-low cursor-pointer rounded-xl p-3 transition-colors">
              Thư mục rác
            </div>
          </nav>
        </aside>
      </section>
      <h2>Outline</h2>
      <section>
        <h3>1. Ô nhập liệu (Outlined Input Field)</h3>
        <p>
          Sử dụng outline để vẽ khung cho Input. Khi ở trạng thái bình thường,
          nó tạo sự ngăn nắp mà không làm giao diện bị nặng nề.
        </p>
        <div class="flex w-full max-w-sm flex-col gap-1.5">
          <label class="text-on-surface-variant ml-1 text-sm font-medium">
            Tên tài khoản
          </label>

          <input
            type="text"
            placeholder="Nhập tên..."
            class="bg-surface border-outline text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-primary hover:bg-surface-container-low rounded-xl border px-4 py-3 transition-all duration-200 focus:ring-1 focus:outline-none"
          />
        </div>
        <h3>2. Nút bấm viền (Outlined Button)</h3>
        <p>
          Dùng cho các hành động phụ hoặc hành động thứ cấp. Theo chuẩn M3, chữ
          bên trong nút này sẽ dùng màu text-primary.
        </p>

        <button class="bg-surface border-outline text-primary hover:bg-primary/5 hover:border-primary/30 flex items-center gap-2 rounded-full border px-6 py-2.5 font-medium transition-all duration-200 active:scale-95">
          <PlusIcon class="h-5 w-5" />
          <span>Thêm vào giỏ hàng</span>
        </button>
        <h3>3. Đường kẻ phân cách (Divider)</h3>
        <p>
          Đây là lúc dùng outline-variant. Nó mỏng và nhạt hơn, giúp phân chia
          nội dung mà không gây ngắt quãng trải nghiệm thị giác.
        </p>
        <div class="bg-surface-container-low border-outline-variant w-64 rounded-2xl border p-2 shadow-md">
          {/* Item 1: Chỉnh sửa */}
          <button class="text-on-surface hover:bg-surface-container-high flex w-full items-center rounded-xl px-4 py-3 font-medium transition-colors active:scale-[0.98]">
            Chỉnh sửa hồ sơ
          </button>

          {/* Đường kẻ chia tách */}
          <hr class="border-outline-variant mx-2 my-1 border-t" />

          {/* Item 2: Đăng xuất */}
          <button class="text-error hover:bg-error/5 flex w-full items-center rounded-xl px-4 py-3 font-medium transition-colors active:scale-[0.98]">
            Đăng xuất
          </button>
        </div>
        <h3>4. Thẻ nội dung viền (Outlined Card)</h3>
        <p>
          M3 sử dụng Card viền khi muốn các nội dung có độ ưu tiên bằng nhau
          hoặc muốn giao diện trông thoáng đạt hơn là dùng Surface Container
          đặc.
        </p>

        <div class="bg-surface border-outline-variant hover:border-outline group cursor-pointer rounded-[2rem] border p-6 transition-all hover:shadow-sm">
          <div class="mb-4 flex items-start justify-between">
            {/* Icon chính */}
            <div class="bg-secondary-container text-on-secondary-container rounded-lg p-2 font-bold">
              <DocumentTextSolid class="h-6 w-6" />
            </div>

            {/* Nút menu phụ */}
            <button class="hover:bg-on-surface-variant/10 rounded-full p-1 transition-colors">
              <EllipsisVerticalIcon class="text-on-surface-variant h-6 w-6" />
            </button>
          </div>

          <h3 class="text-on-surface group-hover:text-primary text-lg font-bold transition-colors">
            Báo cáo quý 1
          </h3>
          <p class="text-on-surface-variant mt-1 text-sm">
            Cập nhật lần cuối: 2 giờ trước
          </p>
        </div>
        <h3>5. Chips không màu nền (Outlined Filter Chips)</h3>
        <p>
          Dùng để hiển thị các tùy chọn lọc mà không chiếm quá nhiều "không gian
          màu" trên màn hình.
        </p>
        <div class="flex gap-2">
          {/* Filter Chip - Trạng thái đã chọn (Selected) */}
          <button class="bg-secondary-container text-on-secondary-container flex items-center gap-2 rounded-lg border border-transparent px-4 py-1.5 text-sm font-medium transition-all hover:shadow-sm active:scale-95">
            <CheckIcon class="h-4 w-4" />
            <span>Thiết kế</span>
          </button>

          {/* Filter Chip - Trạng thái chưa chọn (Unselected) */}
          <button class="bg-surface border-outline text-on-surface-variant hover:bg-surface-container-low hover:border-outline-variant rounded-lg border px-4 py-1.5 text-sm font-medium transition-all active:scale-95">
            Lập trình
          </button>
        </div>
      </section>
      <h2>Add-on color roles</h2>
      <section>
        <h3></h3>
        <p></p>
        <div class="bg-primary-fixed text-on-primary-fixed flex flex-col gap-3 rounded-[2rem] p-6 shadow-sm">
          <div class="flex items-center gap-2">
            <GiftIcon class="h-6 w-6" />
            <span class="text-lg font-bold">Ưu đãi mùa hè</span>
          </div>

          <p class="text-on-primary-fixed-variant text-sm leading-relaxed">
            Gói thành viên vàng không thay đổi màu sắc hiển thị.
          </p>

          <button class="bg-primary-fixed-dim text-on-primary-fixed w-fit rounded-full px-5 py-2 font-bold shadow-md transition-all hover:brightness-110 active:scale-95">
            Nhận ngay
          </button>
        </div>

        <h3></h3>
        <p></p>
        <div class="border-outline-variant flex h-64 w-full overflow-hidden rounded-3xl border">
          <aside class="bg-surface-dim flex w-1/3 flex-col gap-2 p-4">
            <div class="bg-on-surface/10 h-4 w-20 rounded"></div>
            <div class="bg-on-surface/10 h-4 w-24 rounded"></div>
          </aside>

          <section class="bg-surface-bright w-2/3 p-6">
            <h3 class="text-on-surface font-bold">Nội dung chính</h3>
            <div class="bg-surface-container mt-4 rounded-xl p-4">
              Thành phần nằm trên Surface Bright
            </div>
          </section>
        </div>

        <h3></h3>
        <p></p>
        <div class="bg-surface-container-low rounded-[3rem] p-8">
          <div class="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
            <span class="text-on-surface font-medium">Lớp trên cùng</span>
          </div>
        </div>
      </section>
    </>
  );
}
