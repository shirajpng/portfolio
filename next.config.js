/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "st2.depositphotos.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "st4.depositphotos.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "scontent.fktm10-1.fna.fbcdn.net",
        port: "",
      },
    ],
  },
};
