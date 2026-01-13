import "@/ui/globals.css";

export const metadata = {
  title: "Trang web của tôi",
  description: "Mô tả dự án",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
