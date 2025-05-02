import { withSitemap } from 'next-sitemap';

// Your custom configuration
let userConfig = undefined
try {
  // try to import ESM first
  userConfig = await import('./xanmoy-next.config.mjs')
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./xanmoy-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

// Merge user config with default config
if (userConfig) {
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

// Wrap the nextConfig with next-sitemap's withSitemap function
export default withSitemap({
  siteUrl: 'https://research.xanmoy.in', // Your website URL
  generateRobotsTxt: true, // Optionally generate robots.txt
  ...nextConfig, // Spread the default and user-config merged configuration here
});
