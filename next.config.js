/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export for GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/author-web" : "", // Repository name for GitHub Pages
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
