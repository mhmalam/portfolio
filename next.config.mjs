/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.discordapp.com'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      },
};

export default nextConfig;
