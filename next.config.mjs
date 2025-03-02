/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'pub-eb77ceddfd3c4a83ae7cb91c99bf71a7.r2.dev',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: '*',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: '*',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
