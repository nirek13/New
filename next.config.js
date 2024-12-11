/** @type {import('next').NextConfig} */
const nextConfig = {async rewrites() {
        return [
            {
                source: '/api/csv',  // Custom API route
                destination: 'https://canadabuys.canada.ca/opendata/pub/newTenderNotice-nouvelAvisAppelOffres.csv', // Your target CSV URL
            },
        ];
    }};

module.exports = nextConfig;
