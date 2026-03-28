/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["pdf-parse", "mammoth"],
  transpilePackages: ["react-pdf"],
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
