# CV.simonbaumann
CV Web Simon Baumann

This is a modern CV web app ([Bootstrap][bootstrap-link], [jQuery][jquery-link]) and bundle logic with [Webpack][webpack-link] using [hot reloading][hot-reloading-link]

Made by [Simon Baumann] (https://plus.google.com/u/0/103446564621414663443/about)

## Features

- Output 2 js files, one for app code and other one for dependencies ([jQuery][jquery-link], ...)
- SourceMaps for JS
- Ressources (fonts and images) lesser than 300Kb are inlined in CSS files
- Files generated by [Webpack](webpack-link) are injected to index.html
- [Hot reloading][hot-reloading-link] for CSS, update changed files without refreshing web app
- CSS, HTML and JS files are minimized
- [Source Maps][sourcemap-link] are exported to dedicated files
- [Bootstrap][bootstrap-link]
- [JQuery][jquery-link] as a module of webpack

[webpack-link]: http://webpack.github.io/
[jquery-link]: https://jquery.com/
[bootstrap-link]: http://getbootstrap.com/
[hot-reloading-link]: https://webpack.github.io/docs/hot-module-replacement.html
[sourcemap-link]: http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/?redirect_from_locale=fr
[node-link]: https://nodejs.org/en/

## Getting started

Ensure you have [node][node-link] greater than version 4 (Code contains es6 syntax)

### Installation

1. Get repo with `git clone https://github.com/Simonbaumann/CV.git'

3. Run `npm install` and `bower install` to install the dependencies

### Development server (with hot reload)

```bash
npm start
```

Go to `http://localhost:8080/index.html` and you should see the CV web app running!
