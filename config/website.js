const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Leo - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Leo', // Alternative Site title for SEO
  siteTitleShort: 'Leo', // short_name for manifest
  siteHeadline: 'Generating and developing innovative ideas for next and blast tech-ecosystem', // Headline for schema.org JSONLD
  siteUrl: 'http://lvidal.pe', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Portfolio with Parallax effect',
  author: 'Leonardo Vidal', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@lvidalio', // Twitter Username
  ogSiteName: 'leo', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-142541035-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
