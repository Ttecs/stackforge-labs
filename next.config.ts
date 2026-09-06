import type { NextConfig } from "next";

// Served at the ROOT of the custom apex domain (stackforge-labs.com),
// so no basePath/assetPrefix is needed. A CNAME file in public/ carries
// the custom domain into the static export.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
