/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.acme.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
