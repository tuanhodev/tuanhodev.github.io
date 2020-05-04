const mix = require('laravel-mix');

const tailwindcss = require('tailwindcss')

mix.js('assets/resources/js/app.js', 'assets/js')
  .sass('assets/resources/sass/app.scss', 'assets/css/app.css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('assets/resources/js/plugins/thd.config.js') ],
  })
