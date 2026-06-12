/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixelgroup.id',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
