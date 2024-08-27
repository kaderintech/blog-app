/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos', 'icerikplanla.com'],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://icerikplanla.com/api/:path*', // Proxy yapılacak URL
            },
        ];
    },
};

module.exports = nextConfig;
