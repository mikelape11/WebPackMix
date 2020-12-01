const mix = require('laravel-mix');
mix.sass('src/input.scss','dist-laravel-mix').js('src/script.js', 'dist-laravel-mix').sourceMaps().copy('src/index.html', 'dist-laravel-mix').extract(['gsap']);
mix.webpackConfig({
    devServer: {
        proxy: {
            '*': 'http://localhost:8000/'
        }
    }
});