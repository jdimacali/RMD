/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["motion"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

module.exports = nextConfig;
