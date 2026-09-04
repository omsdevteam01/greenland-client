/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-f623f7c00ccf4a9da792668b022a9cd2.r2.dev",
      },
    ],
  },
};

export default nextConfig;