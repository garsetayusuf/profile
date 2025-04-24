/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@react-email/render"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

module.exports = nextConfig;
