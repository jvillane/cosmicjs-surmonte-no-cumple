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
};
