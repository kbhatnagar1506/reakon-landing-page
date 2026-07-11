/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/for-cas", destination: "/ca", permanent: true },
      // Legal pages are canonical on the app subdomain
      { source: "/privacy", destination: "https://app.reakon.in/privacy", permanent: true },
      { source: "/terms", destination: "https://app.reakon.in/terms", permanent: true },
    ]
  },
}

export default nextConfig
