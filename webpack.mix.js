const mix = require('laravel-mix')

mix.sass('assets/scss/app.scss', 'css/app.css')
mix.js('index.js', 'js/app.js')

mix.browserSync({
    server: {
      baseDir: 'public',
      directory: true,
      routes: {
          '/css': 'public/css',
          '/js': 'public/js',
          '/assets': 'public/assets'
      }
    },
    proxy: false,
    files: ['public/css/*.css', 'public/js/*.js', 'public/*.html']
  })
mix.options({
    processCssUrls: false
})

mix.setPublicPath('public')
