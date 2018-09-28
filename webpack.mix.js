const mix = require('laravel-mix')

mix.sass('assets/scss/app.scss', 'css/app.css')
mix.js('index.js', 'js/app.js')
mix.setPublicPath('public')
