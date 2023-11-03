/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ["external-content.duckduckgo.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
