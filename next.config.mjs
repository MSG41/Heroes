/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {

  reactStrictMode: false,
  images: {
    domains: ['images.ctfassets.net'],
  },


  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

module.exports = nextConfig;