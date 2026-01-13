import { promises as fs } from "fs";
import path from "path";

export async function getRaw(relativePath) {
  // Sử dụng path.resolve để đảm bảo đường dẫn chính xác khi build
  const filePath = path.join(process.cwd(), relativePath);
  try {
    const content = await fs.readFile(filePath, "utf8");
    return content;
  } catch (err) {
    console.error("Lỗi đọc file:", err);
    return "// Không thể tải mã nguồn";
  }
}
