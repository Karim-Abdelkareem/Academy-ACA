import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "academy.aca.gov.eg",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
