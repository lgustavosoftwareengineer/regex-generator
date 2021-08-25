const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],

  images: {
    disableStaticImages: true,
  },

  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId},
  ) {
    return {
      '/': {page: '/'},
    }
  },
})
