/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: "export",
  distDir: "_static",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
