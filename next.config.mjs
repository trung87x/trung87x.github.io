const nextConfig = {
  // 1. Chuyển sang chế độ xuất file tĩnh
  output: "export",
  images: {
    // Khai báo danh sách các trang web được phép lấy ảnh
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Cho phép tất cả các đường dẫn ảnh từ trang này
      },
    ],
  },
};

export default nextConfig;
