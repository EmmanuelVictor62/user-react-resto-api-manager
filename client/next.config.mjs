/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_TASK_MANAGER_STORAGE_PERSIST_KEY:
      process.env.NEXT_PUBLIC_TASK_MANAGER_STORAGE_PERSIST_KEY,
    NEXT_PUBLIC_TASK_MANAGER_STORAGE_PERSIST_VERSION:
      process.env.NEXT_PUBLIC_TASK_MANAGER_STORAGE_PERSIST_VERSION,
  },
};

export default nextConfig;
