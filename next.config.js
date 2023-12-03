/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webVitalsAttribution: ["CLS", "LCP"],
    typedRoutes: true,
  },
};

module.exports = nextConfig;
