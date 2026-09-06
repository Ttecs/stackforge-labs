import type { NextConfig } from "next";

// GitHub Pages project site: https://<user>.github.io/<REPO>.
// Change REPO if you rename the repository.
const REPO = "stackforge-labs";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${REPO}` : "",
  assetPrefix: isProd ? `/${REPO}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
