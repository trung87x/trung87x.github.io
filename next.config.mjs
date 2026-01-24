const nextConfig = {
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
  // Cloudflare: Tăng thời gian chờ cho các trang lớn
  staticPageGenerationTimeout: 1000,

  // Cloudflare: Giảm số lượng worker xử lý để tiết kiệm RAM khi build
  // Tránh việc mở quá nhiều luồng gây tràn bộ nhớ (Invalid string length)
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
