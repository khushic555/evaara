/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🟢 Tell Turbopack to stop bundling Prisma and leave it alone!
  serverExternalPackages: ['@prisma/client'],
};

export default nextConfig;