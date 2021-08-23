// webpack.mix.js

let mix = require('laravel-mix');

mix
  .js("resources/js/app.js", "public/js")
  .react()
  .postCss("resources/css/style.css", "public/css", [
    require("tailwindcss"),
  ])
  .browserSync('http://localhost');