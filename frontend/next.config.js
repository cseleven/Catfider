/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
        domains: ["images.unsplash.com"],
        formats: ["image/webp"],
    },
  assetPrefix: isProd ? '/https://github.com/cseleven/Catfider/tree/kanya/' : '',
}

module.exports = nextConfig
