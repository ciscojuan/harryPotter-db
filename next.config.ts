import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img2.wallspic.com",
        port: "",
        pathname: "/previews/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/hpapi/**",
      },
    ],
  },
};

export default nextConfig;
