/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: true,
    },
    rewrites: async () => {
        return [
            {
                source: '/api/ml/:path*',
                destination: process.env.NODE_ENV === 'development'
                    ? 'http://127.0.0.1:8000/:path*' // Proxy to local Python server in dev
                    : '/api/ml/:path*', // In prod (Vercel), it's handled by the serverless function
            },
        ]
    },
};

module.exports = nextConfig;
