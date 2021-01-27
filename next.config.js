const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://surmonte.nocumple.cl',
  pagesDirectory: __dirname + "/pages",
  targetDirectory : 'static/'
});

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    domains: ['cdn.cosmicjs.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generateSiteMap')
    }
    return config
  }
};
