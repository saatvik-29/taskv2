import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // only apply to JS/TS files
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
