import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        // 匹配所有以 /api 开头的请求
        source: "/api/:path*",
        // 转发到后端真实地址 (例如 Spring Boot/Django/Go)
        destination: "http://localhost:8080/:path*",
      },
    ];
  },
};

export default nextConfig;
