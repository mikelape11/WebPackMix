const mix = require('laravel-mix');
mix.sass('src/input.scss','dist').js('src/script.js', 'dist').sourceMaps().copy('src/index.html', 'dist').extract(['gsap']);
