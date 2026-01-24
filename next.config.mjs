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
  // Giúp giảm tải bộ nhớ khi build các trang tĩnh
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
