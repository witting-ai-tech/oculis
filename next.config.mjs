/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "cdn.example.com",
        // port: "",
        // pathname: "/**",
      },
    ],
  },
};


export default nextConfig;
