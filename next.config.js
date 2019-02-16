const withSass = require('@zeit/next-sass')

module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/resume': { page: '/resume' },
      '/portfolio': { page: '/portfolio' },
      '/about': { page: '/about' },
    }
  },
})
