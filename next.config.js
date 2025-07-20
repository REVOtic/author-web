/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  // basePath and assetPrefix should be empty for a custom domain at the root
  basePath: "",
  assetPrefix: "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Add trailing slashes to improve routing compatibility
};

module.exports = nextConfig;
