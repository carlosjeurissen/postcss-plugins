# Installing PostCSS Color Function

[PostCSS Color Function] runs in all Node environments, with special
instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS Color Function] to your project:

```bash
npm install postcss @csstools/postcss-color-function --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssColorFunction = require('@csstools/postcss-color-function');

postcss([
  postcssColorFunction(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use [PostCSS Color Function] in your `postcss.config.js` configuration
file:

```js
const postcssColorFunction = require('@csstools/postcss-color-function');

module.exports = {
  plugins: [
    postcssColorFunction(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS Color Function] in your Webpack configuration:

```js
const postcssColorFunction = require('@csstools/postcss-color-function');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssColorFunction(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS Color Function] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssColorFunction = require('@csstools/postcss-color-function');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssColorFunction(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Color Function] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssColorFunction = require('@csstools/postcss-color-function');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssColorFunction(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Color Function] in your Gruntfile:

```js
const postcssColorFunction = require('@csstools/postcss-color-function');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssColorFunction(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Color Function]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-function
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired