/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".mts",
        ".json",
      ],
    },
  },
  transpilePackages: ["clsx"],
};

export default nextConfig;
