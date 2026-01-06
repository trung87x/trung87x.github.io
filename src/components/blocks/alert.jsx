import { useState } from "react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertBody,
  AlertActions,
} from "../ui/alert";
import { Button } from "../ui/button";

export function DeleteProductBlock({ productName }) {
  // Quản lý trạng thái đóng/mở của Alert
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    console.log(`Đang xóa sản phẩm: ${productName}`);
    // Thêm logic API xóa ở đây
    setIsOpen(false);
  };

  return (
    <div className="rounded-xl border bg-zinc-50 p-4 dark:bg-zinc-800/50">
      <div className="flex items-center justify-between">
        <span className="font-medium">{productName}</span>

        {/* Nút kích hoạt Alert */}
        <Button color="red" onClick={() => setIsOpen(true)}>
          Xóa
        </Button>
      </div>

      {/* Sử dụng Component Alert bạn đã gửi */}
      <Alert open={isOpen} onClose={setIsOpen} size="md">
        <AlertTitle>Xác nhận xóa sản phẩm</AlertTitle>

        <AlertDescription>
          Bạn có chắc chắn muốn xóa <strong>{productName}</strong>? Hành động
          này sẽ gỡ sản phẩm khỏi giỏ hàng và không thể hoàn tác.
        </AlertDescription>

        <AlertBody>
          <p className="text-xs text-zinc-400">
            ID hệ thống: {Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </AlertBody>

        <AlertActions>
          <Button outline onClick={() => setIsOpen(false)}>
            Hủy bỏ
          </Button>
          <Button color="red" onClick={handleDelete}>
            Đồng ý xóa
          </Button>
        </AlertActions>
      </Alert>
    </div>
  );
}
